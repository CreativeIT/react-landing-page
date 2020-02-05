import Head from 'next/head'
import Link from 'next/link'
import './../styles/old-styles.scss';


// export default () => ( <div className="index-page">Index page</div> )
export default () => ( <div className="index-page">
<Head>

    <link rel="icon" type="image/png" href="static/images/images-old/favicon.png"/>
    <meta name="viewport" content="width=device-width, initial-scale=0.8"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="all"/>
    <meta name="description" content="CreativeIT is a full-stack javascript development and UX/UI design firm specializing in web and mobile applications with AngularJS 2, Node.js, Typescript, React, Redux and other modern JavaScript frameworks."/>
    <meta name="author" content="CreativeIT"/>
    <title>CreativeIT - Angular, React, Javascript Development, Design</title>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="CreativeIT - Angular, React, Javascript Development, Design"/>
    <meta property="og:description" content="CreativeIT is a full-stack javascript development and UX/UI design firm specializing in web and mobile applications with AngularJS 2, Node.js, Typescript, React, Redux and other modern JavaScript frameworks."/>
    <meta property="og:url" content="http://creativeit.io/"/>
    <meta property="og:image" content="http://creativeit.io/images/images-old/logo+name.png"/>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700,300' rel='stylesheet' type='text/css'/>

</Head>
    <header className="site-header">
        <Link href="/">
            <a className="logo logo--fixed"></a>
        </Link>
        <div className="menu-button"></div>
        <div className="menu-container">
            <ul className="menu">
                <li className="menu__item wwd-link">
                    <a>WHAT WE DO</a>
                    <div className="underline"></div>
                </li>
                <li className="menu__item hwd-link">
                    <a>HOW WE DO</a>
                    <div className="underline"></div>
                </li>
                <li className="menu__item feedback-link">
                    <a>FEEDBACK</a>
                    <div className="underline"></div>
                </li>
                <li className="menu__item contact-link">
                    <a>CONTACT</a>
                    <div className="underline"></div>
                </li>
                <li className="menu__item portfolio-link">
                    <Link href="/portfolio">
                        <a>PORTFOLIO</a>
                    </Link>
                    <div className="underline"></div>
                </li>
                <li className="menu__item blog">
                   <a href="/blog">BLOG</a>
                   <div className="underline"></div>
                </li>
            </ul>
        </div>
    </header>
    <div className="container greeting">
        <span>
            <div><t>Hey,</t><t>there!</t><br/>
                <t><b>We are</b></t><t>enthusiastic</t><t>team,</t><t>who</t><t>make</t><t>your</t><t>product</t><t><b>awesome</b></t>
            </div>
        </span>
    </div>
    <a name="2what-we-do"></a>
    <div className="container what-we-do">
        <div className="container__title">
            <div className="title">
                <div className="top-block"></div>
                <div className="left-corner-block"></div>
                <div className="text-block">WHAT WE DO</div>
                <div className="right-corner-block"></div>
            </div>
        </div>
        <div className="container__subtitle">
            <span>We are experts in full-stack javascript development and UX/UI design</span>
        </div>
        <div className="slider">
            <div className="button-left"></div>
            <div className="slider-window">
                <div className="container__content container__content--animated">
                    <div className="container__content-item">
                        <img src="static/images/images-old/person_1.gif" alt="consulting_men"/>
                        <h3>JS & UX/UI CONSULTING</h3>
                        <article>
                            What is the secret ingredient of creating a successful
                            product? We share the answer with you, but tss:
                            talented software engineers and designers
                            who love what they do.
                        </article>
                    </div>
                    <div className="container__content-item">
                        <img src="static/images/images-old/person_2.gif" alt="contributing_men"/>
                        <h3>OPEN SOURCE CONTRIBUTING</h3>
                        <article>
                            Our way to learn latest trends, get energy from
                            lovely community and express creativity.
                            Our way to learn latest trends.
                            <br/><br/>
                            <a href="https://github.com/CreativeIT/material-dashboard-lite">DARKBOARD on GitHub</a>
                        </article>
                    </div>
                    <div className="container__content-item">
                        <img src="static/images/images-old/person_3.gif" alt="training_men"/>
                        <h3>TRAINING & COACHING</h3>
                        <article>
                            We spread the possibilities of latest technologies
                            by teaching web design and web development
                            for free both on- and offline.
                            <br/><br/>
                            <a href="http://course.by/about/">Courses platform</a>
                        </article>
                    </div>
                </div>
            </div>
            <div className="button-right"></div>
        </div>
        <div className="slider-points-container">
            <div className="slider-point slider-point--active" slide="1"></div>
            <div className="slider-point" slide="2"></div>
            <div className="slider-point" slide="3"></div>
        </div>
        <div className="price">Projects start at $45 per hour.</div>
    </div>
    <a name="2how-we-do"></a>
    <div className="container how-we-do">
        <div className="container__title">
            <div className="title">
                <div className="top-block"></div>
                <div className="left-corner-block"></div>
                <div className="text-block">HOW WE DO</div>
                <div className="right-corner-block"></div>
            </div>
        </div>
        <div className="slider">
            <div className="button-left"></div>
            <div className="slider-window">
                <div className="container__content container__content--animated">
                    <div className="container__content-item">
                        <img src="static/images/images-old/angular.png" alt="angular_2"/>
                        <h3>ANGULAR 2</h3>
                        <h4 className="label">Angular 2</h4>
                        <div>
                            <h4 className="label">Typescript</h4>
                            <h4 className="label">Node</h4>
                        </div>
                        <h4 className="label">Gulp</h4>
                    </div>
                    <div className="container__content-item">
                        <img src="static/images/images-old/react.png" alt="react"/>
                        <h3>REACT</h3>
                        <div>
                            <h4 className="label">React</h4>
                            <h4 className="label">Babel</h4>
                        </div>
                        <div>
                            <h4 className="label">Redux</h4>
                        </div>
                        <h4 className="label">Webpack</h4>
                    </div>
                    <div className="container__content-item">
                        <img src="static/images/images-old/ui.png" alt="ui"/>
                        <h3>UX/UI</h3>
                        <h4 className="label">Prototyping</h4>
                        <div>
                            <h4 className="label">Usability</h4>
                            <h4 className="label">Sketching</h4>
                        </div>
                        <h4 className="label">Graphic design</h4>
                    </div>
                </div>
            </div>
            <div className="button-right"></div>
        </div>
        <div className="slider-points-container">
            <div className="slider-point slider-point--active" slide="1"></div>
            <div className="slider-point" slide="2"></div>
            <div className="slider-point" slide="3"></div>
        </div>
    </div>
    <a name="2feedback"></a>
    <div className="container feedback">
        <div className="container__title">
            <div className="title">
                <div className="top-block"></div>
                <div className="left-corner-block"></div>
                <div className="text-block">FEEDBACK</div>
                <div className="right-corner-block"></div>
            </div>
        </div>
        <div className="container__subtitle">
            <span>We are experts in full-stack javascript development and UX/UI design</span>
        </div>
        <div className="slider">
            <div className="button-left"></div>
            <div className="slider-window">
            <div className="container__content container__content--animated">
                <div className="container__content-item">
                    <div>
                        <article>
                            <i>
                                “It was really pleasant to work with CreativeIT team. They are professionals, knowledgeable about technology and good at work. I would work with them again very soon.
                            </i>
                        </article>
                        <br/>
                        <div className="name">Manish Sahajwani</div>
                        <div className="team">CEO at Enwrap.io <br/>Bangalore, India</div>
                    </div>
                </div>
                <div className="container__content-item">
                    <div>
                        <article className="full-size large-feedback">
                            <i>
                                "It was a pleasure working with Raman.
                                He was able to take direction well, but more
                                importantly he was able to take vague instructions,
                                imagine what was necessary, and deliver a working
                                solution. In addition, he is respectful and
                                upbeat in communication.
                            </i>
                        </article>
                        <br/>
                        <a className="read-more-button">Read more</a>
                        <br/><br/>
                        <div className="name">Frank Leon Rose</div>
                        <div className="team">Chief Technology Officer<br/>CTO at Droplets.com</div>
                    </div>
                </div>
                <div className="container__content-item">
                    <div>
                        <article>
                            <i>
                                “A pleasure to work with CreativeIT team. They are reliable and hard working.
                            </i>
                        </article>
                        <br/>
                        <div className="name">David Gabriele</div>
                        <div className="team">CEO at SMG <br/> London, UK</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="button-right"></div>
    </div>
        <div className="slider-points-container">
            <div className="slider-point slider-point--active" slide="1"></div>
            <div className="slider-point" slide="2"></div>
            <div className="slider-point" slide="3"></div>
        </div>
    </div>
    <a name="2contact"></a>
    <div className="container contact">
        <div className="container__title">
            <div className="title">
                <div className="top-block"></div>
                <div className="left-corner-block"></div>
                <div className="text-block">CONTACT US</div>
                <div className="right-corner-block"></div>
            </div>
        </div>
        <h3><a href="mailto:hello@creativeit.io">hello@creativeit.io</a></h3>
        <div className="location">Our team based in Minsk, Belarus</div>
        <div className="work-time">Work pattern: 11 am - 8 pm (UTC +3.00)</div>
        <div className="social-icons">
            <a href="https://www.linkedin.com/company/creativeit" title="LinkedIn"></a>
            <a href="https://github.com/CreativeIT" title="GitHub"></a>
            <a href="https://www.behance.net/CreativeIT_Team" title="Behance"></a>
            <a href="https://dribbble.com/CreativeIT_Team" title="Dribbble"></a>
            <a href="https://twitter.com/CreativeITeam" title="Twitter"></a>
        </div>
    </div>
    <footer className="site-footer">© creativeit.io, 2016</footer>
{/* {% comment %}
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-86545481-1', 'auto');
        ga('send', 'pageview');
    </script> {% endcomment %} */}

</div>)