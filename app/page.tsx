import Image from 'next/image'

export default function Home() {
  return (
    <>
       <section className="text-gray-600 px-24 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Make your delivery quick
        <br className="hidden lg:inline-block"/>with QuickKart
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to QuickKart, your one-stop destination for all your online shopping needs! At QuickKart, we take pride in offering an extensive and diverse range of products, carefully curated to cater to every customer preferences.Happy Shopping!.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Deal of the Day!</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">View More</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://wallpapercave.com/wp/wp1877585.jpg"/>
    </div>
  </div>
</section>
    </>
  )
}
