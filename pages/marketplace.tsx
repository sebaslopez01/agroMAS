import NavBar from '@/components/navigation/NavBar'
import Meta from '@/components/Meta'
import Footer from '@/components/navigation/Footer'
import ItemMarket from '@/components/cards/ItemMarket'
import Layout from '@/components/Layout'
import Image from 'next/image'


export default function marketplace() {
    return (
        <>
            <Meta />
            <Layout>
                <div className="flex flex-col justify-center items-center w-full h-52 lg:h-72 space-y-3 bg-[url('/fondo1.png')] bg-cover p-5">
                    {/* Title Marketplace */}
                    <div className='flex justify-start w-[80%] mt-24 lg:w-[60%]'>
                        <h1 id='shadow' className='text-white text-3xl'>Tienda</h1>
                    </div>

                    {/* Search */}
                    <div className='flex h-10 mb-3 w-[80%] lg:w-[60%]'>
                        <input id='card' className='w-[85%] p-5 focus:outline-none text-white placeholder-white rounded-l-full' placeholder='¿Qué estás buscando?'>
                        </input>
                        <button id='card' className='flex w-[15%] justify-center items-center border-l border-white rounded-r-full'>
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
                        <ItemMarket nameProduct='Pera' priceProduct={6.000} productLocation='Guarne'/>
                        <ItemMarket nameProduct='Banano' priceProduct={2.000} productLocation='Rionegro'/>
                        <ItemMarket nameProduct='Manzana' priceProduct={2.000} productLocation='Cisneros'/>
                        <ItemMarket nameProduct='Limón' priceProduct={2.000} productLocation='Uraba'/>
                        <ItemMarket nameProduct='Guayaba' priceProduct={2.000} productLocation='Turbo'/>
                        <ItemMarket nameProduct='Naranja' priceProduct={2.000} productLocation='Cañas gordas'/>
                        <ItemMarket nameProduct='Mandarina' priceProduct={2.000} productLocation='Santa Marta'/>
                        <ItemMarket nameProduct='Guanabana' priceProduct={2.000} productLocation='USA'/>
                    </div>
                </div>
            </Layout>

        </>
    )
}