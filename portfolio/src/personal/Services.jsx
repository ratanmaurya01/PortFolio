import React from 'react'

function Services() {
    const service = [
        {
            id: 1,
            title: "Web Development",
            description: "We provide the best web development services to our clients.",
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "We provide the best mobile app development services to our clients.",

        },
        {
            id: 3,
            title: "Digital Marketing",
            description: "We provide the best digital marketing services to our clients.",
        },
        {
            id: 4,
            title: "SEO",
            description: "We provide the best SEO services to our clients.",
        },
        {
            id: 5,
            title: "Graphic Design",
            description: "We provide the best graphic design services to our clients.",

        },
        {
            id: 6,
            title: "Content Writing",
            description: "We provide the best content writing services to our clients.",
        }
    ]
    return (

        <div className='bg-black text-white py-20' id='service'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 '>Service </h2>
                <div className='grid grid-cols-1 md:grid-flow-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        service.map(service => (
                            <div key={service.id}
                                className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>

                                <div
                                    className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400'>
                                    {service.id}
                                </div>
                                <h3
                                    className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400'>

                                    {service.title}
                                </h3>
                                <p className='mt-2 text-gray-300'>
                                    {service.description}
                                </p>
                                <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>
                                    Learn More
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
