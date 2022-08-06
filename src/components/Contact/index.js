import React from 'react';
import './Contact.css'

export default function Contact(props) {
    return (
        <section id='contact'>
            <h1 className='contact-title'>
                <span className='highlight'>C</span>ontact
            </h1>
            <div className='contact-inline-block'>
                <p className='contact-description'>If you would like to contact me, you can reach me at any of these links. Thanks for the interest, and I look forward to hearing from you!</p>
                <div className='contact-container'>
                    {
                        props.contactData.map(contactInfo => {
                            return (
                                <div className='contact-info-container'>
                                    <i 
                                        aria-hidden="true" 
                                        className={`contact-icon ${contactInfo.iconClass}`}
                                    >
                                    </i>
                                    <a
                                        className='contact-link'
                                        href={contactInfo.link}
                                    >
                                        {contactInfo.text}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
