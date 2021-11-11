import Image from 'next/image'
import Geeksblabla from '../public/geeksblabla.jpeg'

const Talks = () => {
    return (<>
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center">Talks</h1>
        <div className="w-full border-2 border-blue-300 rounded-lg h-28 flex mt-10">
            <div className="h-full flex items-center ml-10">
                <Image src={Geeksblabla} className="rounded-full border text-center" width="80" height="80"/>
            </div>
            <div className="flex items-center mx-auto">
                <div className="mx-auto">
                    <p className="text-sm text-gray-500 font-medium">Event: <span className="text-green-400">BlablaConf</span></p>
                    <h1 className="text-sm text-gray-500 font-medium mt-2">Title:&nbsp;&nbsp;&nbsp;<span className="text-lg text-gray-600 font-bold">Learn How to use the context api</span></h1>
                </div>
            </div>
        </div></>)
}

export default Talks;