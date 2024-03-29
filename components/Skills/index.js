import { Atom, JS, TS, MongoDb, NextJs, NodeJs, MySQL, Bash, Clang, Docker, Git, GraphQL } from '../index'

const Skills = () => {
  return (<div className="w-full mx-auto">
    <h1 className="text-center text-gray-600 font-bold text-lg mt-10 dark:text-white">Skills</h1>
    <div className="w-4/6 h-3 hidden lg:flex rounded-full bg-pink-500 mx-auto mt-10 justify-between">
      <div className="bg-pink-500 w-3 h-14 rounded-full relative top-0">&nbsp;</div>
      <div className="bg-pink-500 w-3 h-10 rounded-full relative top-0">&nbsp;</div>
      <div className="bg-pink-500 w-3 h-14 rounded-full relative top-0">&nbsp;</div>
    </div>

    <div className="flex w-full justify-around flex-col lg:flex-row">

      <div className="mt-5 lg:mt-10 w-full mx-auto flex flex-col flex-wrap lg:flex-nowrap justify-between">
        <h1 className="text-gray-600 font-bold text-base lg:text-lg mt-5 lg:mt-10 text-center dark:text-white">Web dev</h1>
        <div className="flex flex-wrap w-full mx-auto">
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <Atom className="h-5 lg:w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">React</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <JS className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Javascript</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <TS className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Typescript</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <MongoDb className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">MongoDb</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <NextJs className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Next Js</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <NodeJs className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Node Js</p>
          </div>
          
        </div>

      </div>

      <div className="mt-5 lg:mt-10 w-full mx-auto flex flex-col">
        <h1 className="text-gray-600 font-bold text-base lg:text-lg mt-5 lg:mt-10 text-center dark:text-white">Mobile dev</h1>
        <div className="w-36 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
          <Atom className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
          <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">React Native</p>
        </div>
      </div>

      <div className="mt-5 lg:mt-10 w-full mx-auto flex flex-col">
        <h1 className="text-gray-600 font-bold text-base lg:text-lg mt-5 lg:mt-10 text-center dark:text-white">Other Technologies</h1>
        <div className="flex flex-wrap w-full mx-auto">
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <Bash className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Shell/Bash</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <Clang className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Clang</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <Docker className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Docker</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <Git className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Git</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <MySQL className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">Mysql</p>
          </div>
          <div className="w-28 h-9 lg:w-40 lg:h-11 rounded-lg border-2 border-blue-300 mt-5 mx-auto flex">
            <GraphQL className="h-5 w-5 mt-1.5 lg:mt-2.5 ml-2 lg:ml-4" />
            <p className="text-gray-600 font-medium text-xs lg:text-sm mt-2 lg:mt-2.5 ml-2 lg:ml-3 dark:text-gray-300">GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default Skills;