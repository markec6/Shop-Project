import { useEffect, useState } from "react"
import ProductService from "../service/productService"
import { useParams } from "react-router-dom"
import SingleProductComponent from "../components/SingleProductComponent"


function SinglePage() {
    const {id} = useParams()
    const [singleProduct, setSingleProduct] = useState({})

    useEffect(() =>{
        if (id) { // kazemo da ako ima id da mi pozove producte i stavi u state 
      ProductService.SingleProduct(id)
        .then((res) => {
          console.log(res.data);
          setSingleProduct(res.data)
        })
        .catch((err) => console.log(err));
    }
    },[id]) // na svaki klik menja id od tog producta


  return (
    <div className="max-w-7xl mx-auto px-[10px] py-[32px]">
        {/**posto znamo da je product object, ovde samo proveravamo object */}
        {Object.keys(singleProduct).length > 0 ? ( 
             <SingleProductComponent product={singleProduct} />
        ) : <h2>Loading...</h2>
        }
    </div>
  )
}

export default SinglePage