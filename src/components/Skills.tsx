import React from 'react'

const SKILLS = {
    Languages: [
        "Javascript",
        "Typescript",
        "HTML/CSS",
        "Tailwind"
    ],
    Framworks: [
        "ReactJs",
        "NextJs",
        "React Native"
    ],
    Infastructure: [
        "Git"
    ],
    Databases: [
        "PostgreSql"
    ]
}

const Skills = () => {
    return (
        <div className='max-w-screen-md mx-auto py-4'>
            <div className='font-bold text-2xl sm:text-2xl text-left'>Skills</div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className='font-bold text-lg mt-2 sm:text-xl text-left'>Language</div>
                    {
                        SKILLS.Languages.map((language, idx) => (
                            <div className='text-sm mb-1' key={idx}>
                                {language}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className='font-bold text-lg mt-2 sm:text-xl text-left'>Frameworks</div>
                    {
                        SKILLS.Framworks.map((framework, idx) => (
                            <div className='text-sm mb-1' key={idx}>
                                {framework}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className='font-bold text-lg mt-2 sm:text-xl text-left'>Infrastructure</div>
                    {
                        SKILLS.Infastructure.map((infra, idx) => (
                            <div className='text-sm mb-1' key={idx}>
                                {infra}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className='font-bold text-lg mt-2 sm:text-xl text-left'>Databases</div>
                    {
                        SKILLS.Databases.map((databases, idx) => (
                            <div className='text-sm mb-1' key={idx}>
                                {databases}
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Skills