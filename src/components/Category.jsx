import React, { useEffect, useState } from 'react'
import ProductService from '../service/productService'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {setSelectedCategory} from '../Redux/productSlice'

function Category() {

  const dispatch = useDispatch()
  const [Categories, setCategories] = useState([]) // u ovaj state ubacujemo sve kategorije
  const [ShowCategories, setShowCategories] = useState(false) // state za prikaz kategorija

  useEffect(() => {
    ProductService.getProductCategory()
      .then((res) => {
        // na console.log() smo videli sa res.data kat u konzoli
        setCategories(res.data) // samim tim to ubacujemo u state 
        console.log('Evo stigle kategorije', res.data)
      })
      .catch((err) => console.log(err))
  },[])

  // funkcija za klik na x za Header
  function ShowC () {
    setShowCategories(!ShowCategories)
  }

  return (
    <div className='bg-primary3'>
      <div className='max-w-7xl mx-auto px-[10px] py-[10px] flex flex-col gap-[16px] md:flex-row justify-between items-center'>
          <button onClick={ShowC} className='px-[22px] text-[14px] lg:text-[16px] rounded-[5px] font-semibold bg-primary2 text-white py-[16px] lg:px-[32px]'>Browse categories</button>
          <ul className='flex'>
              {!ShowCategories ? <ul className=' flex justify-center flex-wrap gap-[10px] md:flex-row md:gap-[4px] lg:gap-[24px]'> {/** ako je false prikazi kat.**/}
              {Categories.slice(6, 12).map((cat) => ( // sa ovim slice smo rekli da hocemo samo 5 kategorija, mozemo i dve metode od jednom raditi .slice.map
               // dodali smo onClick da trenutni state(selectedCategory) bude ono sto smo kliknuli(cat.slug)
                <li onClick={() => dispatch(setSelectedCategory(cat.slug))} className='p-[6px] border border-primary1 rounded-[5px] text-[14px] md:border-none lg:text-[16px] cursor-pointer font-semibold text-primary1' key={cat.slug}>{cat.name}</li> // ovo slug sluzi da zna na kojoj smo trenutno kategoriji 
              ))}
            </ul> : <div className='flex gap-[10px] items-center'> {/**ako je true prikazi ovo dole**/}
                    <FaLongArrowAltLeft />
                    <p>Show Categories</p>
                  </div>}
          </ul>
      </div>
    </div>
  )
}

export default Category