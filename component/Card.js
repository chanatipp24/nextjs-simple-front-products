import Image from "next/image"
import Link from "next/link"

export default function Card({ item }) {
    return (
        <div className="card h-100">
            <Image src={item.images[0]} className="card-img-top" alt={item.title} width={20} height={200}></Image>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
            </div>
            <div className="card-footer">
                <Link href={"/products/" + item.id} className="btn btn-primary">View Product</Link>
            </div>
        </div>
    )
}