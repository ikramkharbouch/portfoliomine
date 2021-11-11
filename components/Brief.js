import { AiFillGithub, AiOutlineHeatMap, AiFillTwitterCircle } from "react-icons/ai";

const Button = ({text}) => {
    return (
      <button className="w-1/2 bg-pink-500 text-base rounded-lg py-4 font-bold text-white shadow-lg">{text}</button>
    )
  }

const Brief = () => {
    return (
    <div className="h-72 rounded border-2 mx-auto mt-10 border-blue-300 w-full">
        <div className="w-4/6 mx-auto">
            <h1 className="mt-11 text-gray-600 font-bold text-lg">Welcome to my portfolio</h1>
            <p className="text-base mt-7">I am a 1337 student. A web developer who is looking to grow through new experiences.</p>
        </div>
        <div className="flex mx-auto text-center w-4/6 mt-10 gap-5 items-center">
              <Button text="Download Resume" />
              <div className="flex justify-around w-1/2">
                <AiFillGithub color="#4B5563" />
                <AiFillTwitterCircle color="#4B5563" />
                <AiOutlineHeatMap color="#4B5563" />
              </div>
            </div>
    </div>);
}

export default Brief;