import Link from "next/link"
import Layout from "@/components/Layout"

export default function nosotros(){
    return (
        <Layout>
            <div>
                <h1 className="text-3xl">Nosotros</h1>
                <Link href="/">Home</Link>
            </div>
        </Layout>
        
    )
}