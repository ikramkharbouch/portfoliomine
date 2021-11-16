import { AiFillGithub, AiOutlineHeatMap, AiFillTwitterCircle } from "react-icons/ai";
import { FaDev } from "react-icons/fa"
import Link from 'next/link'

const Footer = () => {

    const githubUrl = "https://github.com/ikramkharbouch"
    const TwitterUrl = "https://twitter.com/geekyumeko"
    const DevUrl = "https://dev.to/ikramkharbouch"
  
    return ( 
    <footer className="fullscreen mt-10 h-20 flex items-center">
        <div className="flex w-full lg:w-1/2 mx-auto justify-around items-center">
            <h1 className="text-gray-600 font-bold text-xs w-full">&copy; 2021-Ikram Kharbouch</h1>
            <div className="flex justify-between gap-2">
            <Link href={githubUrl}><a target="_blank"><AiFillGithub color="#EC4899" className="h-6 w-6"/></a></Link>
            <Link href={TwitterUrl}><a target="_blank"><AiFillTwitterCircle color="#EC4899" className="h-6 w-6"/></a></Link>
            <Link href={DevUrl}><a target="_blank"><FaDev color="#EC4899" className="h-6 w-6"/></a></Link>
            </div>
        </div>
    </footer> );
}
 
export default Footer;