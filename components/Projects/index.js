import { FiExternalLink } from "react-icons/fi"
import Link from 'next/link'

const Projects = () => {

    const camagrUrl = "https://github.com/ikramkharbouch/Camagru"
    const rtUrl = "https://github.com/ikramkharbouch/rt"
    const fillitUrl = "https://github.com/ikramkharbouch/Fillit"

    const CateringManagement = "https://github.com/ikramkharbouch/Catering-frontend"

    return (<>
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center dark:text-white">Previous Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4 mt-10 w-full" id="projects">
            <div className="h-44 border-2 border-blue-300 rounded-lg">
                <div className="flex justify-between mx-5 m-4">
                    <h1 className="text-gray-600 font-black text-base dark:text-white">Camagru</h1>
                    <Link href={camagrUrl}><FiExternalLink color="#EC4899" /></Link>
                </div>
                <div className="h-12 md:h-12 lg:h-14"><p className="text-xs mx-5 text-left dark:text-gray-300">An instagram-like app for taking and editing pictures using Javascript and PHP.</p></div>
                
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">PHP</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Javascript</div>
                </div>
            </div>
            <div className="h-44 border-2 border-blue-300 rounded-lg">
                <div className="flex justify-between mx-5 m-4">
                    <h1 className="text-gray-600 font-black text-base dark:text-white">RTv1</h1>
                    <Link href={rtUrl}><FiExternalLink color="#EC4899" /></Link>
                </div>
                <div className="h-12 md:h-12 lg:h-14"><p className="text-xs mx-5 text-left dark:text-gray-300">A Raytracer built with C language to generate images according to Raytracing protocol using minilibX as a graphical library.</p></div>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-14 rounded-full py-1 text-center">Clang</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">MinilibX</div>
                </div>
            </div>
            <div className="h-44 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
                <h1 className="text-gray-600 font-black text-base dark:text-white">Fillit</h1>
                <Link href={fillitUrl}><FiExternalLink color="#EC4899" /></Link>
            </div>
            <div className="h-12 md:h-12 lg:h-14"><p className="text-xs mx-5 text-left dark:text-gray-300">This project is about arranging tetriminos in the smallest square possible using the backtracking algorithm.</p></div>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">Clang</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Algorithms</div>
                </div>
            </div>
            <div className="h-44 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
                <h1 className="text-gray-600 font-black text-base dark:text-white">Catering management app</h1>
                <Link href={CateringManagement}><FiExternalLink color="#EC4899" /></Link>
            </div>
            <div className="h-12 md:h-12 lg:h-14"><p className="text-xs mx-5 text-left dark:text-gray-300">This app manages the kitchen service inside a hospital and lets the administrators control the data of the patients and the stock products.</p></div>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">NextJs</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Docker</div>
                </div></div>
        </div>
    </>);
}

export default Projects;