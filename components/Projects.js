import { FiExternalLink } from "react-icons/fi"
import Link from 'next/link'

const Projects = () => {

    const camagrUrl = "https://github.com/ikramkharbouch/Camagru"

    const SideProject = "https://github.com/ikramkharbouch/Camagru"

    return (<>
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center">Previous Projects</h1>
        <div className="grid grid-cols-2 mx-auto gap-4 mt-10 w-full">
            <div className="h-40 border-2 border-blue-300 rounded-lg">
                <div className="flex justify-between mx-5 m-4">
                    <h1 className="text-gray-600 font-black text-base">Camagru</h1>
                    <Link href={SideProject}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
                </div>
                <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">PHP</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Javascript</div>
                </div>
            </div>
            <div className="h-40 border-2 border-blue-300 rounded-lg">
                <div className="flex justify-between mx-5 m-4">
                    <h1 className="text-gray-600 font-black text-base">Side Project</h1>
                    <Link href={SideProject}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
                </div>
                <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">React</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">ExpressJs</div>
                </div>
            </div>
            <div className="h-40 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
                <h1 className="text-gray-600 font-black text-base">Side Project</h1>
                <Link href={SideProject}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
            </div>
                <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">NextJs</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Postgresql</div>
                </div>
            </div>
            <div className="h-40 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
                <h1 className="text-gray-600 font-black text-base">AnimeList</h1>
                <Link href={SideProject}><a target="_blank"><FiExternalLink color="#EC4899" /></a></Link>
            </div>
                <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
                <div className="mt-5 mx-5 flex gap-2">
                    {/* tags in here */}
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-20 rounded-full py-1 text-center">React</div>
                    <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-24 rounded-full py-1 text-center">Docker</div>
                </div></div>
        </div>
    </>);
}

export default Projects;