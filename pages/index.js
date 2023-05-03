import Image from "next/image"
import Products from "./products"
import Link from "next/link"


export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products?limits=15')
  const data = await res.json()
  return {
    props: {
      products: data.products
    }
  }
}

export default function Home({ products }) {

  return (
    <div>
      <div className="header mb-4 mt-4">
        <h1>Home Page</h1>
      </div>
      <table className="table ">
        <tbody>

          {(products).map((v) => {
            return (
              <tr key={v.id}>
                <td><Link href={"/products/" + v.id}><img src={v.thumbnail} width="100%" height="100%" /></Link></td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  )
}
