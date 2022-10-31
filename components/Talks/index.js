import Image from 'next/image'
import Geeksblabla from '../../public/geeksblabla.jpeg'
import { FiExternalLink } from "react-icons/fi"
import Link from 'next/link'

const Talks = () => {

    const geeksUrl = "https://www.youtube.com/watch?v=4CccgPH8yck&t=3s"

    return (<>
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center dark:text-white">Talks</h1>
        <div className="w-full border-2 border-blue-300 rounded-lg h-28 flex mt-10">
            <div className="h-full flex items-center ml-5">
                <Image src={Geeksblabla} className="rounded-full border text-center" width="80" height="80"/>
            </div>
            <div className="flex items-center ml-5 h-full w-full">
                <div className="mx-auto lg:ml-5">
                    <p className="text-sm text-gray-500 font-medium dark:text-gray-300">Event: <span className="text-green-400">BlablaConf</span></p>
                    <h1 className="text-sm text-gray-500 font-medium mt-2 dark:text-gray-300">Title:&nbsp;&nbsp;&nbsp;<span className="text-sm lg:text-lg text-gray-600 font-bold dark:text-white">Learn How to use the react context api</span></h1>
                </div>
                <div className="h-full"><Link href={geeksUrl}><FiExternalLink color="#EC4899" className="m-4 cursor-pointer"/></Link></div>
            </div>
            
        </div>
    </>)
}

export default Talks;