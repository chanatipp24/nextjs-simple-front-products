import Link from "next/link"


function Footer() {
    return (
        <footer className="bg-dark text-center text-white footer">
            <div className="text-center p-3">
                © 2023 Copyright:
                <Link className="text-white" href="/"> Chanatip develop</Link>
            </div>
        </footer>

    )
}

export default Footer