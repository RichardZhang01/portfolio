import React from 'react';

function Portfolio(props) {
    return (
        <section>
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
        </section>
    )
}

export default Portfolio;