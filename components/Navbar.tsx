import Link from "next/link"
export default function Navbar(){
   return( 
     <>
      <header className="text-gray-600 px-24 body-font">
  <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">QuickKart</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">SmartPhones</a>
      <a className="mr-5 hover:text-gray-900">Laptops</a>
      <a className="mr-5 hover:text-gray-900">Headphones</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    <Link href={"/login"} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      
    </Link>
  </div>
</header>
     </>
   )
}