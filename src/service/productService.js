import axios from "axios"

class ProductService {
    static allProducts = () => axios.get('https://dummyjson.com/products') 

    //ovo je za request za kategorije u navigaciji 
    static getProductCategory = () => axios.get('https://dummyjson.com/products/categories')
    //a ovo je za sve producte iz tih oredjenih kategorija (dinamicno ${category})
    static getProductByCategory = (category) => axios.get(`https://dummyjson.com/products/category/${category}`)

    //Ovo je za single product stranicu
    static SingleProduct = (id) => axios.get(`https://dummyjson.com/products/${id}`)
}

export default ProductService