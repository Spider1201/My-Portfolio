import { ArrowUp, Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>
            <p className='text-muted-foreground '>
                 © {new Date().getFullYear()} Spider.inc, All rights reserved.
            </p>
            <a href="#hero" className='p-2 rounded-fullbg-primary/10 hover:bg-primary/20 text-primary transitions-colors '>
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}

export default Footer