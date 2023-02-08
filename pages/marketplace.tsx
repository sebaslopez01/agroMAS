import NavBar from '@/components/NavBar'
import Meta from '@/components/Meta'
import Footer from '@/components/Footer'
import ItemMarket from '@/components/ItemMarket'
import Layout from '@/components/Layout'
import Image from 'next/image'


export default function marketplace() {
    return (
        <>
            <Meta />
            <Layout>
                <div className="flex flex-col justify-center items-center w-full h-52 space-y-3 bg-[url('/fondo1.png')] bg-cover p-5">
                    {/* Title Marketplace */}
                    <div className='flex justify-start w-full mt-24'>
                        <h1 id='shadow' className='text-white text-3xl'>Tienda</h1>
                    </div>

                    {/* Search */}
                    <div className='flex w-full h-10 mb-3'>

                        <input id='card' className='w-4/5 rounded-l-xl p-5 focus:outline-none'>
                        </input>
                        <button className='flex w-1/5 bg-red-400 justify-center items-center rounded-r-lg'>
                            {/* <span className='text-2xl text-white font-medium'>Buscar</span> */}
                            <Image className='scale-75' src="/search-icon.png" alt="" width={50} height={50}></Image>
                        </button>
                    </div>
                </div>
                <div>
                </div>
                <div className='flex flex-col bg-gray-200'>
                    <div className='flex w-[90%] justify-start m-auto mt-7 mb-4'>
                        <span className='text-2xl font-semibold'>Resultados de búsqueda...</span>
                    </div>
                    <div className='flex flex-wrap justify-center w-full'>
                        <ItemMarket />
                        <ItemMarket />
                        <ItemMarket />
                        <ItemMarket />
                    </div>
                </div>
            </Layout>

        </>
    )
}