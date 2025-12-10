import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const ProjectsSection = () => {

    const projects = [
        {
            id: 1,
            title: "9JA News",
            description: "9JA News is an online news platform focused on providing accurate, up-to-date coverage of Nigerian news, entertainment, politics, sports, and trending topics, with a simple and accessible reading experience.",
            image: "/projects/blog-site.png",
            tags: ["React", "SassCSS"],
            demoUrl: "#",
            gitUrl: "https://github.com/Spider1201/9JANews"
        },
        {
            id: 1,
            title: "Restuarant Website",
            description: "Our restaurant delivers quality dining with carefully crafted dishes, fresh ingredients, and exceptional service—creating a memorable experience for every guest.",
            image: "/projects/restuarant.png",
            tags: ["HTML", "CSS"],
            demoUrl: "https://spider-restaurant.netlify.app/",
            gitUrl: ""
        },
        {
            id: 1,
            title: "Medi-Care platform",
            description: "We offer trusted medical care focused on patient well-being, combining experienced professionals, advanced technology, and personalized treatment.",
            image: "/projects/medi-care.png",
            tags: ["HTML", "CSS", "JS"],
            demoUrl: "https://medicalcarehoz.netlify.app/",
            gitUrl: "https://github.com/Spider1201/medi-care"
        },
        {
            id: 1,
            title: "3-Bedroom Modern Bungalow – 3D Design ",
            description: "Modern 3-bedroom bungalow visualized in 3D with thoughtful layout and style.",
            image: "/projects/3D-Bungalow.jpg",
            tags: ["Revit", "3D Modeling"],
            demoUrl: "/projects/3D-Bungalow.jpg",
            gitUrl: ""
        },
        {
            id: 1,
            title: "Modern Duplex – 3D Night Rendering",
            description: "3D visualization of a modern house plan with night lighting and landscaping features with night aesthetics.",
            image: "/projects/Duplex1.jpg",
            tags: ["Revit", "Plans", "3D Modeling"],
            demoUrl: "/projects/Duplex1.jpg",
            gitUrl: ""
        },
    ]
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured
                    <span className='text-primary'> Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here is some of my recent projects. Each project was carefully crafted with attention to details, perfomance, and user experience
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((projects, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-48 overflow-hidden'>
                                <img src={projects.image} alt={projects.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-100' />
                            </div>
                            <div className='p-6 '>
                                <div className='flex flex-wrap gap-2 mb-4 text-center'>
                                    {projects.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground'>{tag}</span>
                                    ))}
                                </div>
                           
                            <h3 className='text-xl font-semibold mb-2'>{projects.title}</h3>
                            <p className='text-muted-foreground text-sm mb-4'>{projects.description}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a href={projects.demoUrl} 
                                    target='_blank'
                                    className='text-forground/80 hover:text-primary transition-colors duration-300'>
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={projects.gitUrl} 
                                    target='_blank'
                                    className='text-forground/80 hover:text-primary transition-colors duration-300'>
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                     </div>       
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a href="https://github.com/Spider1201" 
                    target='_blank'
                    className='cosmic-button w-fit flex items-center mx-auto gap-2'>Check My Github <ArrowRight size={16}/></a>
                </div>
            </div>

        </section>
    )
}

export default ProjectsSection