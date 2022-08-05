import React from 'react';
import './About.css'

export default function About(props) {

    return (
        <section id='about'>
            <h1 className='about-title'>
                Hello, my name is <span className='highlight'>{props.owner}</span>.
            </h1>
            <h2 className='about-description'>
                {props.aboutDescription}
            </h2>
            <p className='about-content'>
                {props.about}
            </p>
            <div className='about-links'>
                <a className='about-resume-btn' href={props.links.resume}>
                    Resume
                </a>
                <a
                    href={props.links.github}
                    aria-label="github"
                    className="about-links-icons"
                >
                    <i aria-hidden="true" className="fab fa-github fa-2xl"></i>
                </a>
                <a
                    href={props.links.linkedin}
                    aria-label="linkedin"
                    className="about-links-icons"
                >
                    <i aria-hidden="true" className="fab fa-linkedin fa-2xl"></i>
                </a>
            </div>
        </section>
    )
}