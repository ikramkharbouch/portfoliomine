import { AiFillGithub, AiOutlineHeatMap, AiFillTwitterCircle } from "react-icons/ai";
import { FaDev } from "react-icons/fa"
import Link from 'next/link'

const Button = ({ text }) => {
  return (
    <button className="w-4/5 bg-pink-500 text-xs lg:text-sm rounded-lg py-4 font-bold text-white">{text}</button>
  )
}

const Brief = () => {

  const githubUrl = "https://github.com/ikramkharbouch"
  const TwitterUrl = "https://twitter.com/geekyumeko"
  const DevUrl = "https://dev.to/ikramkharbouch"

  return (
    <div className="h-80 rounded border-2 mx-auto mt-10 border-blue-300 w-full flex items-center">
      <div className="mx-auto">
        <div className="w-4/6 mx-auto">
          <h1 className="text-gray-600 font-bold text-lg">Welcome to my portfolio</h1>
          <p className="text-sm lg:text-base mt-4 lg:mt-7 font-light">I am a digital geek, focused on web development, programming and problem solving.</p>
        </div>
        <div className="flex mx-auto flex-col lg:flex-row text-center w-4/6 mt-5 lg:mt-10 gap-5 items-center">
          <a href="./public/ikram-webdev-curriculum-vitae.pdf" target="_blank" download className="w-full"><Button text="Download Resume" /></a>
          <div className="flex justify-around w-1/2">
            <Link href={githubUrl}><AiFillGithub color="#4B5563" /></Link>
            <Link href={TwitterUrl}><AiFillTwitterCircle color="#4B5563" /></Link>
            <Link href={DevUrl}><FaDev color="#4B5563" /></Link>
          </div>
        </div>
      </div>
    </div>);
}

export default Brief;