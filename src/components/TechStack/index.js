import React from 'react'
import './TechStack.css'

export default function TechStack(props) {
    props.techStack.sort();

    return (
        <section id='tech-stack'>
            <h1 className='tech-stack-title'>
                <span className='highlight'>T</span>ech <span className='highlight'>S</span>tack
            </h1>
            <ul className='tech-stack-container'>
                {
                    props.techStack.map((tech, i) => {
                        return (
                            <li
                                className='tech-stack-item'
                                key={`${i}, ${tech}`}
                            >
                                {tech}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
