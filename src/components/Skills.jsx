import React from 'react'
import { skills } from '../data/Skills'

const Skills = () => {
  return (
    <div name='skills' className='text-[#1e3751] md:min-h-screen'>
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-[#C3073F] inline'>Skills</p>
        </div>

        {skills.map((skill, index) => (
          <div key={index} className='w-full py-8'>
            <p className='font-bold mb-4'>{skill.section}</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 text-center'>
              {skill.entries.map((eachSkill) => (
                <div key={eachSkill.id} className='shadow-md hover:scale-105 duration-500 rounded-md overflow-hidden'>
                  {/* <a href={eachSkill.url}> */}
                    <img className='mt-4 w-16 mx-auto' src={eachSkill.img} alt={eachSkill.title} />
                    <p className='my-4 text-sm'>{eachSkill.title}</p>
                  {/* </a> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
