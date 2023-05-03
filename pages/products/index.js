import Card from '../../component/Card'

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    return {
        props: {
            products: data.products
        }
    }
}


export default function products({ products }) {
    return (
        <div>
            <div className="mt-4 mb-4 text-center"><h1>All Products</h1></div>
            <br />
            <div className='row row-cols-3 g-4'>
                {products.map(item => {
                    return (
                        <div key={item.id} className='col'>
                            <Card item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}