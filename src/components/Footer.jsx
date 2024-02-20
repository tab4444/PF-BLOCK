import React from 'react'

const Footer = () => {
    return (
    <footer className='bg-neutral-950 border-t border-neutral-700'>
        <div className="flex flex-row justify-around p-8 text-white font-montserrat items-center">
            <img className='w-64' src="/img/logo block gris.png" alt="block" />
            <ul>
                <li><strong className='uppercase font-unbounded text-green-500'>Información de contacto</strong></li>
                <li>Email: thiagoblock445@gmail.com</li>
                <li>Github: <a target='blank' href="https://github.com/tab4444">tab4444</a></li>
                <li>LinkedIn: <a target='blank' href="https://www.linkedin.com/in/thiagoblock/">Thiago Block</a></li>
            </ul>
        </div>
        <hr className='border-neutral-800'/>
        <p className="flex justify-center p-2 text-neutral-500 gap-x-2 font-unbounded">Developed by<a target='blank' className='text-neutral-300 hover:text-green-500 transition-all' href="https://github.com/tab4444">tab4</a></p>
    </footer>
    )
}

export default Footer