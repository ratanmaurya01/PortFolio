import React from 'react'

function Project() {

    const project = [
        {
            id: 1,
            name: "E-commerce",
            techonolgies: "React js , Nodejs ",
            Image: 'https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b',
            github: "",

        },
        {
            id: 2,
            name: "Employee MS",
            techonolgies: "Mearn stack",
            Image: 'https://cms-assets.recognizeapp.com/wp-content/uploads/2024/04/12211326/ms-teams-app-reviews.jpeg',
            github: "",
        },
        {
            id: 3,
            name: "The Sandbox",
            techonolgies: "Mearn stack",
            Image: 'https://www.leetdesk.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fleetdesk%2Fc5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C374%2C4000%2C2250%26w%3D1920%26h%3D1080&w=3840&q=75',
            github: "",
        }


    ]
    return (

        <div className='bg-black text-white py-20' id='project'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 '>Project </h2>
                <div className='grid grid-cols-1 md:grid-flow-cols-2 lg:grid-cols-3 gap-8'>

                    {project.map(project => (
                        <div key={project.id} className='bg-gray-800  p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                         <img src={project.Image} alt="images " className='rounded-lg mb-4 w-full
                         h-50 object-cover' />
                         <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                         <p className='text-gray-400 mb-4'>{project.techonolgies}</p>
                         <a
                          href={project.github}
                          target='_blank'
                          rel='noooener noreferrer'
                           className='inline-block bg-gradient-to-r from-gray-400 to-blue-500 text-white px-4 py-2 rounded-full'>Github</a>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Project
