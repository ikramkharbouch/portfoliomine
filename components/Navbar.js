import Link from 'next/link'

const Navbar = () => {
    return ( <>
    
    <nav className="text-center flex items-center justify-between mx-auto mt-10 w-full">
        <h1 className="text-gray-700 font-bold text-xl">Ikram.K</h1>
        <ul className="flex gap-4 items-center">
            {/* <Link href="#brief"><li className="text-gray-700 font-bold cursor-pointer">About</li></Link>
            <Link href="#projects"><li className="text-gray-700 font-bold cursor-pointer">Projects</li></Link> */}
            <Link href="#contact"><button className="bg-pink-500 text-white font-bold px-5 py-2 rounded-lg"><li>Contact</li></button></Link>
        </ul>
    </nav>
    </> );
}
 
export default Navbar;