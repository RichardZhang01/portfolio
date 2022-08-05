import React from 'react';
import './Projects.css'

export default function Projects(props) {
    return (
        <section id='projects'>
            <h1 className='projects-title'>
                <span className='highlight'>P</span>rojects
            </h1>
            <div className='projects-container'>
                {
                    props.projectsData.map((project) => {
                        return (
                            <div 
                                className='project-card' 
                                key={project.title}
                            >
                                <h3 className='project-title'>
                                    {project.title}
                                </h3>
                                <p className='project-description'>
                                    {project.description}
                                </p>
                                <ul className='project-stack'>
                                    {
                                        project.stack.map((stackItem) => {
                                            return (
                                                <li 
                                                    className='project-stack-item' 
                                                    key={`${project.title}, ${stackItem}`}
                                                >
                                                    {stackItem}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className='project-icons-container'>
                                    <a
                                        href={project.github}
                                        aria-label={`github repo for ${project.title}`}
                                        className='project-github project-icon'
                                    >
                                        <i aria-hidden="true" class="fab fa-github fa-lg"></i>
                                    </a>
                                    <a
                                        href={project.url}
                                        aria-label={`link to ${project.title} app`}
                                        className='project-url project-icon'
                                    >
                                        <i aria-hidden="true" class="fas fa-external-link-alt fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}


/* <section>
            <h2 class="section__title">Portfolio</h2>

            <div class="projects__grid">

                <div class="project">
                    <h3>Project 1</h3>
                    <p class="project__description">
                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                    unde beatae Quis
                    </p>
                    <ul class="project__stack">
                        <li class="project__stack-item">SASS</li>
                        <li class="project__stack-item">TypeScript</li>
                        <li class="project__stack-item">React</li>
                    </ul>

                    <a
                    href="https://github.com"
                    aria-label="source code"
                    class="link link--icon"
                    >
                    <i aria-hidden="true" class="fab fa-github"></i>
                    </a>
                    <a
                    href="https://example.com"
                    aria-label="live preview"
                    class="link link--icon"
                    >
                    <i aria-hidden="true" class="fas fa-external-link-alt"></i>
                    </a>
                </div>

            <div class="project">
                <h3>Project 2</h3>
                <p class="project__description">
                Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                sapiente debitis labore sed ipsam Mollitia repellat illum quod
                unde beatae Quis
                </p>
                <ul class="project__stack">
                <li class="project__stack-item">SASS</li>
                <li class="project__stack-item">TypeScript</li>
                <li class="project__stack-item">React</li>
                </ul>

                <a
                href="https://github.com"
                aria-label="source code"
                class="link link--icon"
                >
                <i aria-hidden="true" class="fab fa-github"></i>
                </a>
                <a
                href="https://example.com"
                aria-label="live preview"
                class="link link--icon"
                >
                <i aria-hidden="true" class="fas fa-external-link-alt"></i>
                </a>
            </div>

            <div class="project">
                <h3>Project 3</h3>
                <p class="project__description">
                Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                sapiente debitis labore sed ipsam Mollitia repellat illum quod
                unde beatae Quis
                </p>
                <ul class="project__stack">
                <li class="project__stack-item">SASS</li>
                <li class="project__stack-item">TypeScript</li>
                <li class="project__stack-item">React</li>
                </ul>

                <a
                href="https://github.com"
                aria-label="source code"
                class="link link--icon"
                >
                <i aria-hidden="true" class="fab fa-github"></i>
                </a>
                <a
                href="https://example.com"
                aria-label="live preview"
                class="link link--icon"
                >
                <i aria-hidden="true" class="fas fa-external-link-alt"></i>
                </a>
            </div>
            </div>
        </section> */