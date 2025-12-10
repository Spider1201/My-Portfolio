import { Code, User, Briefcase } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative '>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4-xl font-bold mb-12 text-center'>
          About <span className='text-primary '>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>
          <div className='space-y-6'>
            <h3 className='text-2xl  font-semibold'>Passionate Software Devloper & Architect </h3>
            <p className="text-muted-foreground">
              I am a software developer with over 3 years of experience in technology, specializing in the design and development of scalable, maintainable web applications. I work with JavaScript, React, Node.js, and modern web technologies, and I place strong emphasis on clean code, performance optimization, and best engineering practices.

              In addition to my technical background, I bring over 5 years of experience in architectural design, producing detailed architectural drawings and applying structured design principles to complex problems. I also possess extensive knowledge in numerology and astrology, which contributes to a strong analytical mindset and a unique, multidimensional approach to problem-solving.

            </p>
            <p className='text-muted-foreground'>
              I'm passionate about creating impactful digital experiences by merging software engineering, architectural thinking, and analytical insight—building solutions that are not only functional, but purposeful and well-crafted.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button  '>Get In Touch</a>
              <a className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4 '>
                <div className='p-3 rounded pg-primary/10'>
                  <Code h-6 w-6 text-primary />
                </div>
                <div className='text-left'>
                  <h4 className="font-semibold text-lg">Web Developement</h4>
                  <p className='text-muted-foreground'>
                    Creating responsive websites and web application with mordern framework
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4 '>
                <div className='p-3 rounded pg-primary/10'>
                  <User h-6 w-6 text-primary />
                </div>
                <div className='text-left'>
                  <h4 className="font-semibold text-lg">Mobile Development</h4>
                  <p className='text-muted-foreground'>
                    Building smooth, responsive cross-platform mobile apps with React Native.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4 '>
                <div className='p-3 rounded pg-primary/10'>
                  <Briefcase h-6 w-6 text-primary />
                </div>
                <div className='text-left'>
                  <h4 className="font-semibold text-lg">Architectural Design</h4>
                  <p className='text-muted-foreground'>
                    Designing architecture with accuracy and structural insight.
                  </p>
                </div> 
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4 '>
                <div className='p-3 rounded pg-primary/10'>
                  <Briefcase h-6 w-6 text-primary />
                </div>
                <div className='text-left'>
                  <h4 className="font-semibold text-lg">Personal Insight & Readings</h4>
                  <p className='text-muted-foreground'>
                    Personalized numerology and astrology readings for clarity and insight.
                  </p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection