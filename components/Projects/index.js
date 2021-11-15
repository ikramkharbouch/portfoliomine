import { FiExternalLink } from "react-icons/fi"
import Link from 'next/link'

const Projects = () => {

    const camagrUrl = "https://github.com/ikramkharbouch/Camagru"
    const rtUrl = "https://github.com/ikramkharbouch/rt"
    const fillitUrl = "https://github.com/ikramkharbouch/Fillit"

    const SideProject = "https://github.com/ikramkharbouch/Camagru"

    return (<>
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center">Previous Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4 mt-10 w-full" id="projects">
            <div className="h-44 border-2 border-blue-300 rounded-lg">
                <div className="flex justify-between mx-5 m-4">
                    <h1 className="text-gray-600 font-black text-base">Camagru</h1>
                    <Link href={camagrUrl}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
                </div>
                <div className="h-12"><p className="text-xs mx-5 text-left">An instagram-like app for taking and editing pictures using Javascript and PHP.</p></div>
                
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">PHP</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Javascript</div>
                </div>
            </div>
            <div className="h-44 border-2 border-blue-300 rounded-lg">
                <div className="flex justify-between mx-5 m-4">
                    <h1 className="text-gray-600 font-black text-base">RTv1</h1>
                    <Link href={rtUrl}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
                </div>
                <div className="h-12"><p className="text-xs mx-5 text-left">A Raytracer built with C language to generate images according to Raytracing protocol using minilibX as a graphical library.</p></div>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-14 rounded-full py-1 text-center">Clang</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">MinilibX</div>
                </div>
            </div>
            <div className="h-44 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
                <h1 className="text-gray-600 font-black text-base">Fillit</h1>
                <Link href={fillitUrl}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
            </div>
            <div className="h-12"><p className="text-xs mx-5 text-left">This project is about arranging tetriminos in the smallest square possible using the backtracking algorithm.</p></div>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">Clang</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Algorithms</div>
                </div>
            </div>
            <div className="h-44 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
                <h1 className="text-gray-600 font-black text-base">AnimeList</h1>
                <Link href={SideProject}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
            </div>
            <div className="h-12"><p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p></div>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">React</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Docker</div>
                </div></div>
        </div>
    </>);
}

export default Projects;