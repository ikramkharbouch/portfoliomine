const Navbar = () => {
    return ( <>
    
    <nav className="mx-auto text-center flex justify-between mx-20 mt-10">
        <h1 className="text-gray-700 font-bold text-xl">Ikram.K</h1>
        <ul className="flex gap-4 items-center">
            <button className="bg-pink-500 text-white font-bold px-5 py-2 rounded-lg shadow-lg"><li>About</li></button>
            <li className="text-gray-700 font-bold">Projects</li>
            <li className="text-gray-700 font-bold">Contact</li>
        </ul>
    </nav>
    </> );
}
 
export default Navbar;