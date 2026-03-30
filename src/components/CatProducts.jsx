import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductService from "../service/productService"
import { useState } from "react"
import { Rating } from "react-simple-star-rating"
import { Link } from "react-router-dom"
import { FaLocationArrow } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";


function CatProducts() {
    
    
    //uvozimo state za cart
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    // ovo je state za simple-rating zvezdice, kada kazemo ocenu uvek je pocetno stanje 0
    const [rating, setRating] = useState(0)

    // lokalni state za ubacivanje trenutnih producta
    const [categoryProducts, setCategoryProducts] = useState([]) 
    // state iz reduxa koji koristimo i za nav za klik na neku kategoriju 
 const selectedCategory = useSelector(state => state.product.selectedCategory)

    useEffect(() => {
        ProductService.getProductByCategory(selectedCategory) // ovde smo prosledili state iz reduxa
            .then((res) => {
                console.log(res.data.products)
                // ovde samo dodajemo zeljene producte u taj state da bi ih prosle prikazali
                setCategoryProducts(res.data.products)
                setIsLoading(true)
            })
            .catch((err) => console.log(err))
    },[selectedCategory]) // a ovde smo bukvalno rekli da useEffect radi isto psole svakog klika na neku kat

    const handleRating = (rate) => {
        setRating(rate)
    }

    // ovde definisemo onPointere za rating
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

  return (
    // prikaz proizvoda sa ovim lokalnim stateom
    <div className="max-w-7xl mx-auto px-[10px]">
        <h2 className="text-[26px] font-semibold mb-[20px]">Category:</h2>
        {isLoading ? <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-between gap-[24px]">
            {categoryProducts.slice(0, 6).map((product) => (
                <div className="relative mx-auto w-[95%] md:w-[30%] border border-OurBorder rounded-[12px]">
                    <img className="w-[100%] object-cover"  src={product.thumbnail} alt=""/>
                    <div className=" absolute top-[20px] right-[20px] p-[8px] rounded-2xl bg-OurBorder/20 ">
                         <AiFillHeart/>
                    </div>
                        <div className="p-[12px] ">
                            <p className="text-[16px] text-primary1 font-bold">{product.title}</p>
                            <div className="flex justify-between items-center">
                            <Rating 
                                initialValue={product.rating} size={20} 
                            //    readonly={true}
                            onClick={handleRating}
                            // Ovde ih dodajemo za sam klik
                                // onPointerEnter={onPointerEnter}
                                // onPointerLeave={onPointerLeave}
                                // onPointerMove={onPointerMove}
                                SVGclassName="inline-block"
                                />
                            <span className="text-[12px] font-semibold text-primary2">({product.rating})</span>
                            </div>
                            <div className="flex justify-between items-center mt-[20px]">
                               <p className="text-[22px] md:text-[18px] font-semibold font-sans opacity-70">${product.price}</p>
                               <div className="flex items-center">
                                {/**ovde prosledjujemo tacno putanju sa dinamcki id */}
                                  <Link to={`/Product/${product.id}`} className="p-[10px] font-bold text-primary1">View more</Link>
                                  <FaLocationArrow className="text-primary1"/>
                               </div>
                            </div>
                        </div>
                </div>
            ))}
        </div> : <h2>Loading</h2>}
    </div>
  )
}

export default CatProducts