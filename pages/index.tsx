import Header from '@/components/Header'
import Meta from '@/components/Meta'
import Footer from '@/components/Footer'
import ItemMarket from '@/components/ItemMarket'

export default function Home() {
  return (
    <>
      <Meta></Meta>
      <Header></Header>
      <div className='flex pt-20 p-10 justify-center flex-col bg-[#ECECEA]'>
        <div className='flex justify-center'>
          <h2 className='text-3xl w-[80%] text-center'
          >En AgroMas, contamos con dos líneas principales para apoyar el campo colombiano. Conócelas aquí.
          </h2>
        </div>
        <div className='flex flex-row justify-evenly p-5 m-5'>
          <h1 className='text-3xl font-semibold text-orange-600'>Marketplace</h1>
          <h1 className='text-3xl font-semibold text-orange-600'>Inversiones</h1>
        </div>
        <div className='flex flex-col rounded-xl bg-gray-300 h-96 m-10 mx-15'>

        </div>
        <div id='destacados' className='flex h-80 p-5 m-5'>
          <div className='flex justify-center content-center w-full pt-5'>
            <span className='text-gray-300 text-9xl font-serif font-bold tracking-widest text-center'>DESTACADOS</span>
          </div>
        </div>
        <div id='oportunities' className='flex justify-evenly'>
          <div className='flex flex-col rounded-xl bg-gray-300 h-96 w-[30%]'></div>
          <div className='flex flex-col rounded-xl bg-gray-300 h-96 w-[30%]'></div>
          <div className='flex flex-col rounded-xl bg-gray-300 h-96 w-[30%]'></div>
        </div>
      </div>
      <Footer />
    </>
  )
}
