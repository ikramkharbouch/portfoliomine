import Head from 'next/head'
import Navbar from '../components/Navbar'
import { AiFillGithub, AiOutlineHeatMap, AiFillTwitterCircle } from "react-icons/ai";

import { FiExternalLink } from "react-icons/fi"
import Atom from '../public/atom.svg'
import JS from '../public/js.svg'
import MongoDb from '../public/mongodb.svg'
import NextJs from '../public/next-js.svg'
import NodeJs from '../public/nodejs.svg'
import MySQL from '../public/mysql.svg'
import Bash from '../public/bash.svg'
import Clang from '../public/c.svg'
import Docker from '../public/docker.svg'
import Git from '../public/git.svg'
import Image from 'next/image'
import profilePic from '../public/myavatar.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>My own portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="mx-auto text-center text-2xl flex flex-col mt-20">
        <div className="mx-auto h-32 w-32 bg-gray-600 rounded-full">
          <Image src={profilePic} className="rounded-full" />
        </div>
        <div className="w-3/4 h-72 rounded border-2 mx-auto mt-10 border-blue-300">
          <div className="w-4/6 mx-auto">
            <h1 className="mt-11 text-gray-600 font-bold text-lg">Welcome to my portfolio</h1>
            <p className="text-base mt-7">I am a 1337 student. A web developer who is looking to grow through new experiences.</p>
          </div>

          <div className="flex mx-auto text-center w-4/6 mt-10 gap-5 items-center">
            <button className="w-1/2 bg-pink-500 text-base rounded-lg py-4 font-bold text-white shadow-lg">Download Resume</button>
            <div className="flex justify-around w-1/2">
              <AiFillGithub color="#4B5563" />
              <AiFillTwitterCircle color="#4B5563" />
              <AiOutlineHeatMap color="#4B5563" />
            </div>
          </div>
        </div>
        <div className="mx-auto flex gap-2 justify-between mt-10 w-2/12">
          <div className="bg-pink-500 rounded-full shadow-lg w-28 h-3">&nbsp;</div>
          <div className="bg-pink-500 rounded-full shadow-lg w-12 h-3">&nbsp;</div>
          <div className="bg-pink-500 rounded-full shadow-lg w-28 h-3">&nbsp;</div>
        </div>
        <div className="px-28">
          <h1 className="text-center text-gray-600 font-bold text-lg mt-10">Skills</h1>
          <div className="w-4/6 h-3 rounded-full bg-pink-500 mx-auto mt-10 shadow-lg flex justify-between">
            <div className="bg-pink-500 w-3 h-14 rounded-full shadow-lg relative top-0">&nbsp;</div>
            <div className="bg-pink-500 w-3 h-10 rounded-full shadow-lg relative top-0">&nbsp;</div>
            <div className="bg-pink-500 w-3 h-14 rounded-full shadow-lg relative top-0">&nbsp;</div>
          </div>

          <div className="flex mx-auto">

            <div className="mt-10 w-5/6 mx-auto flex flex-col justify-between">
              <h1 className="text-gray-600 font-bold text-lg mt-10">Web dev</h1>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <Atom className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">React</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <JS className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Javascript</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <MongoDb className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">MongoDb</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <NextJs className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Next Js</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <NodeJs className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Node Js</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <MySQL className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Mysql</p>
              </div>
            </div>

            <div className="mt-10 w-5/6 mx-auto flex flex-col">
              <h1 className="text-gray-600 font-bold text-lg mt-10">Mobile dev</h1>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <Atom className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">React Native</p>
              </div>
            </div>

            <div className="mt-10 w-5/6 mx-auto flex flex-col">
              <h1 className="text-gray-600 font-bold text-lg mt-10">Other Technologies</h1>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <Bash className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Shell/Bash</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <Clang className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">C Language</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <Docker className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Docker</p>
              </div>
              <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-10 mx-auto flex">
                <Git className="h-5 w-5 mt-2.5 ml-4" />
                <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Git</p>
              </div>
            </div>
          </div>

        </div>
        <div className="mx-auto flex gap-2 justify-between mt-10 w-2/12">
          <div className="bg-pink-500 rounded-full shadow-lg w-28 h-3">&nbsp;</div>
          <div className="bg-pink-500 rounded-full shadow-lg w-12 h-3">&nbsp;</div>
          <div className="bg-pink-500 rounded-full shadow-lg w-28 h-3">&nbsp;</div>
        </div>
        <h1 className="text-gray-600 font-bold text-lg mt-10">Previous Projects</h1>
        <div className="grid grid-cols-2 mx-28 gap-4 mt-10">
          <div className="h-40 border-2 border-blue-300 rounded-lg">
            <div className="flex justify-between mx-5 m-4">
              <h1 className="text-gray-600 font-black text-base">Camagru</h1>
              <FiExternalLink color="#EC4899" />
            </div>
            <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
            <div className="mt-5 mx-5 flex gap-2">
              {/* tags in here */}
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-1/4 rounded-full py-1">PHP</div>
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-2/4 rounded-full py-1">Javascript</div>
            </div>
          </div>
          <div className="h-40 border-2 border-blue-300 rounded-lg">
            <div className="flex justify-between mx-5 m-4">
              <h1 className="text-gray-600 font-black text-base">Matcha</h1>
              <FiExternalLink color="#EC4899" />
            </div>
            <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
            <div className="mt-5 mx-5 flex gap-2">
              {/* tags in here */}
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-1/4 rounded-full py-1">React</div>
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-2/4 rounded-full py-1">ExpressJs</div>
            </div>
          </div>
          <div className="h-40 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
            <h1 className="text-gray-600 font-black text-base">Side Project</h1>
            <FiExternalLink color="#EC4899" />
          </div>
            <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
            <div className="mt-5 mx-5 flex gap-2">
              {/* tags in here */}
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-1/3 rounded-full py-1">NextJs</div>
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-2/5 rounded-full py-1">Postgresql</div>
            </div></div>
          <div className="h-40 border-2 border-blue-300 rounded-lg"><div className="flex justify-between mx-5 m-4">
            <h1 className="text-gray-600 font-black text-base">AnimeList</h1>
            <FiExternalLink color="#EC4899" />
          </div>
            <p className="text-xs mx-5 text-left">Brief introduction about the project and what it does.</p>
            <div className="mt-5 mx-5 flex gap-2">
              {/* tags in here */}
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-1/4 rounded-full py-1">React</div>
              <div className="text-xs font-bold text-indigo-500 bg-blue-100 w-2/6 rounded-full py-1">Docker</div>
            </div></div>
        </div>
      </div>
    </>
  )
}
