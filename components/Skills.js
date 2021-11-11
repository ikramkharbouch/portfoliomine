import { Atom, JS, MongoDb, NextJs, NodeJs, MySQL, Bash, Clang, Docker, Git } from './index'

const Skills = () => {
    return ( <div className="w-full mx-auto">
    <h1 className="text-center text-gray-600 font-bold text-lg mt-10">Skills</h1>
    <div className="w-3/5 h-3 rounded-full bg-pink-500 mx-auto mt-10 shadow-lg flex justify-between">
      <div className="bg-pink-500 w-3 h-14 rounded-full shadow-lg relative top-0">&nbsp;</div>
      <div className="bg-pink-500 w-3 h-10 rounded-full shadow-lg relative top-0">&nbsp;</div>
      <div className="bg-pink-500 w-3 h-14 rounded-full shadow-lg relative top-0">&nbsp;</div>
    </div>

    <div className="flex w-full justify-around">

      <div className="mt-10 w-full mx-auto flex flex-col justify-between">
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center">Web dev</h1>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <Atom className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">React</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <JS className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Javascript</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <MongoDb className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">MongoDb</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <NextJs className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Next Js</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <NodeJs className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Node Js</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <MySQL className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Mysql</p>
        </div>
      </div>

      <div className="mt-10 w-full mx-auto flex flex-col">
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center">Mobile dev</h1>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <Atom className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">React Native</p>
        </div>
      </div>

      <div className="mt-10 w-full mx-auto flex flex-col">
        <h1 className="text-gray-600 font-bold text-lg mt-10 text-center">Other Technologies</h1>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <Bash className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Shell/Bash</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <Clang className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">C Language</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <Docker className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Docker</p>
        </div>
        <div className="w-40 h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <Git className="h-5 w-5 mt-2.5 ml-4" />
          <p className="text-gray-600 font-medium text-sm mt-2.5 ml-3">Git</p>
        </div>
      </div>
    </div>

  </div> );
}
 
export default Skills;