import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='p-6'>
            <h1 className='text-4xl font-bold mb-6'>About <span className='text-cus-yellow'>Me</span></h1>
            <div className='flex justify-center items-center'>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <div className='h-36 w-64 border border-slate-500 rounded-lg flex flex-col justify-center items-center gap-2 p-3'>
                        <div>
                            <FontAwesomeIcon style={{ fontSize: "27px" }} icon={faPhone} />
                        </div>
                        <span className='text-sm'>9800070374</span>
                    </div>
                    <div className='h-36 w-64 border border-slate-500 rounded-lg flex flex-col justify-center items-center gap-2 p-3'>
                        <div>
                            <FontAwesomeIcon style={{ fontSize: "35px" }} icon={faEnvelope} />
                        </div>
                        <Link target='_blank' className='text-sm' to='mailto:biswajitbesra28@gmail.com'>biswajitbesra28@gmail.com</Link>
                    </div>
                    <div className='h-36 w-64 border border-slate-500 rounded-lg flex flex-col justify-center items-center gap-2 p-3'>
                        <div>
                            <FontAwesomeIcon style={{ fontSize: "35px" }} icon={faLinkedin} />
                        </div>
                        <Link target='_blank' className='text-sm break-words' style={{ wordBreak: 'break-word' }} to='https://www.linkedin.com/in/biswajit-besra-0b471a315/'>https://www.linkedin.com/in/biswajit-besra-0b471a315/</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact