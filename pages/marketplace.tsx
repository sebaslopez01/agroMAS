import NavBar from '@/components/NavBar'
import Meta from '@/components/Meta'
import Footer from '@/components/Footer'
import ItemMarket from '@/components/ItemMarket'
export default function marketplace () {
    return (
    <>
        <Meta />
        <NavBar />
        <div className="flex bg-[url('/fondo1.png')] bg-cover h-96 w-full p-16 justify-center flex-wrap wra">
            <div className='flex mt-36 w-4/5'>
                <input id='card' className='h-14 w-4/5 rounded-l-xl p-5'>
                </input>
                <div className='flex w-1/5 h-14 bg-red-400 justify-center items-center rounded-r-lg'>
                    <span className='text-2xl text-white font-medium'>Buscar</span>
                </div>
            </div>
        </div>
        <div>
        </div>
        <div className='flex flex-col bg-gray-200'>
            <div className='flex p-10 pt-20 pl-20'>
                <span className='text-3xl font-semibold'>Resultados de Búsqueda</span>
            </div>
            <div className='flex p-10 py-16 justify-evenly'>
                <ItemMarket />
                <ItemMarket />
                <ItemMarket />
            </div>
        </div>

        <Footer />
    </>
    )
}