import Image from "next/image";
import { useRouter } from "next/router";
import "../../styles/ProductDetail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    return {
        props: { products: data }
    }
}

export default function ProductDetail({ products }) {
    const router = useRouter()
    const id = router.query.id
    return (
        <>
            <div className="card card-pd mt-5 p-3">
                <div className="wrapper row">
                    <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                            <div className="tab-pane active">
                                <img src={products.thumbnail} width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="details col-md-6">
                        <h3 className="product-title">{products.title}</h3>
                        <div className="rating">
                            <span className="review-no">{products.rating} rating</span>
                        </div>
                        <p className="product-description">{products.description}</p>
                        <h4 className="price">Price: <span>{products.price}</span></h4>
                        <div className="action">
                            <button className="btn btn-primary" type="button">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}