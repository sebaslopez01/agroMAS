import Layout from "@/components/Layout"

export default function nosotros(){
    return (
        <Layout>
            <div>
                <div className="w-full h-[96px]"></div>
                <button className="bg-gray-500 p-3 m-3 rounded-lg" onClick={() => window.history.back()}> &lt;---- Pa tra</button>
            </div>
        </Layout>
        
    )
}