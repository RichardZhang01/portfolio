import React from 'react';

function About(props) {
    return (
        <section className="center about">
            <h1>Hello, I am <span class="about__name">Richard Zhang.</span></h1>
            {/* <h2 class="">This is my portfolio page.</h2> */}
            <p class="about__desc">
                I am an aspiring full-stack developer. I have been coding for a few months and I have loved every second of it. My educational background is in forensic science and nursing, an odd mix of disciplines for sure. But that makes me extremely adaptable, adept at working in teams and communication, and most importantly, I have learned how to learn. I recently gained a full-stack development certificate from a coding bootcamp, and I will continue to build on the tech stack I have learned to improve my abilities and pursue my passion for programming!
            </p>

            <div class="about__contact center">
                <a href="https://docs.google.com/document/d/1dOrSFonWHGFHaDSeTKwmNgPrzrzdo89B4IeTCzyIx0Q/edit?usp=sharing">
                    <span class="btn btn--outline">Resume</span>
                </a>

                <a
                    href="https://github.com/RichardZhang01"
                    aria-label="github"
                    class="link link--icon"
                >
                    <i aria-hidden="true" class="fab fa-github"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/richard-zhiyuan-zhang/"
                    aria-label="linkedin"
                    class="link link--icon"
                >
                    <i aria-hidden="true" class="fab fa-linkedin"></i>
                </a>
            </div>
        </section>
    )
}

export default About;