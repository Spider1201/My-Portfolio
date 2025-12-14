import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, GithubIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import { SiWhatsapp } from "react-icons/si";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

   const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Map form fields to EmailJS template variables
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Error",
          description: "Message failed. Try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
    return (
        <section
            id='contact'
            className='py-24  px-4 ralative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a projectin mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4' style={{ alignItems: "center" }}>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <a href="mailto:onatadeabdulmajeed@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        onatadeabdulmajeed@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4 ' style={{ alignItems: "center" }}>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div >
                                    <a href="tel:+2349161578428" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +2349161578428
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4' style={{ alignItems: "center" }}>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Lagos, Nigeria
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='https://linkedin.com/in/onatade-abdulmajeed-ab814b382' target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href='https://wa.link/61zgot' target='_blank'>
                                    <SiWhatsapp size={25} />
                                </a>
                                <a href='https://x.com/spider337761?s=21' target='_blank'>
                                    <Twitter />
                                </a>
                                <a href='https://github.com/Spider1201/' target='_blank'>
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs' >
                        <h3>Send a message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input type="text" id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary' placeholder='Onatade Abdulmajeed' value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input type="email" id='email' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary' placeholder='youremail@gmail.com' value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none' placeholder='Leave a message.....' value={formData.message} onChange={handleChange} />
                            </div>
                            <button type='submit'
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection