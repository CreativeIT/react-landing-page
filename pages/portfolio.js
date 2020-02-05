import Head from 'next/head'
import Link from 'next/link'
// import Contact from './../components/Contact';
// import "../styles/main-section.scss";
import './../styles/old-styles.scss';


export default () => <div className="portfolio">
    <Head>
        {/* <title>React landing</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
 */}



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

    <div className="body">
         <header className="site-header white-background">
            <Link href="/">
                <a  className="logo"></a>
            </Link>
            <div className="menu-button"></div>
            <div className="menu-container">
                <ul className="menu">
                    <li className="menu__item home-page-link">
                        <Link href="/">
                            <a>HOME PAGE</a>
                        </Link>
                        <div className="underline"></div>
                    </li>
                    <li className="menu__item portfolio-link active">
                        <a>PORTFOLIO</a>
                        <div className="underline"></div>
                    </li>
                    <li className="menu__item blog">
                        <a href="/blog">BLOG</a>
                        <div className="underline"></div>
                    </li>
                </ul>
            </div>
        </header>
        <a name="2portfolio"></a>
        <div className="container portfolio">
            <div className="container__title">
                <div className="title">
                    <div className="top-block"></div>
                    <div className="left-corner-block"></div>
                    <div className="text-block">WHAT WE MADE</div>
                    <div className="right-corner-block"></div>
                </div>
            </div>
            <div className="underline"></div>
            <div className="container__subtitle">
                <span>The projects we are proud of</span>
            </div>
            <div className="projects-container">
                <div className="project">
                    <a href="http://creativeit.io/material-dashboard-lite" title="Material Dashboard Lite" target="_blank">
                        <img src="static/images/images-old/projects/darkboard.png" className="project__image"/>
                    </a>

                    <div className="project__details">
                        <h3 className="project__title">
                            <a href="http://creativeit.io/material-dashboard-lite" title="Material Dashboard Lite" target="_blank">MATERIAL DASHBOARD LITE</a>
                        </h3>

                        <span className="project__subtitle">Own opensource product</span>

                        <div>
                            <h4 className="label">UI/UX</h4>
                            <h4 className="label">D3</h4>
                            <h4 className="label">ES6</h4>
                            <h4 className="label">Sass</h4>
                        </div>

                        <article className="project__description">
                            Darkboard is the first admin theme with dark material design.
                            Harmony graphic and thoughtful design was created by our ui/ux designer.
                            Then we worked hard to provide simple and high quality implementation using cutting edge front-end technologies.
                        </article>

                        <a className="social-profile" href="https://github.com/CreativeIT/material-dashboard-lite" title="GitHub"></a>
                        <a className="social-profile" href="https://dribbble.com/CreativeIT_Team/projects/363426-Darkboard" title="Dribbble"></a>
                    </div>

                    <div className="project__heroes">
                        <h4>HEROES:</h4>
                        <img src="static/images/images-old/alex_grey.png" title="Alex"/>
                        <img src="static/images/images-old/vlada_grey.png" title="Vlada"/>
                        <img src="static/images/images-old/dina_grey.png" title="Dina"/>
                    </div>

                    <div className="clearfix"></div>
                </div>
                <div className="project">
                    <a href="http://swayy.me/" title="Portfoleon" target="_blank">
                        <img src="static/images/images-old/projects/sfc-project.png" className="project__image"/>
                    </a>

                    <div className="project__details">
                        <h3 className="project__title">
                            <a href="http://swayy.me/" title="SWAYY.ME" target="_blank">SWAYY.ME</a>
                        </h3>
                        <span className="project__subtitle">Swayy Media Group Limited, UK</span>

                        <div className="project__technologies">
                            <h4 className="label">UI/UX</h4>
                            <h4 className="label">HTML5</h4>
                            <h4 className="label">Sass</h4>
                        </div>

                        <article className="project__description">
                            Swayy.me is social network for leisure business and influencers.
                            It helps users to find easily place to have a rest and leisure businesses increase sales.
                            We created this project from prototypes to front-end implementation.
                        </article>

                        <a className="social-profile" href="https://dribbble.com/CreativeIT_Team/projects/437299-SFC" title="Dribbble"></a>

                    </div>

                    <div className="project__heroes">
                        <h4>HEROES:</h4>
                        <img src="static/images/images-old/roma_grey.png" title="Raman"/>
                        <img src="static/images/images-old/alex_grey.png" title="Alex"/>
                        <img src="static/images/images-old/dina_grey.png" title="Dina"/>
                    </div>

                    <div className="clearfix"></div>
                </div>
                <div className="project">
                    <a href="http://portfoleon.com/" title="Portfoleon" target="_blank">
                        <img src="static/images/images-old/projects/portfoleon.jpg" className="project__image"/>
                    </a>

                    <div className="project__details">
                        <h3 className="project__title">
                            <a href="http://portfoleon.com/" title="Portfoleon" target="_blank">PORTFOLEON.COM</a>
                        </h3>
                        <span className="project__subtitle">Portfoleon LLC, Germany</span>

                        <div className="project__technologies">
                            <h4 className="label">Angular 2</h4>
                            <h4 className="label">TypeScript</h4>
                            <h4 className="label">Sass</h4>
                        </div>

                        <article className="project__description">
                            Portfoleon.com is a simple visual tool for project portfolio managers and program managers.
                            We created simple and clean design based on google material design.
                        </article>

                        <a className="social-profile" href="https://dribbble.com/CreativeIT_Team/projects/484861-Portfoleon" title="Dribbble"></a>
                    </div>

                    <div className="project__heroes">
                        <h4>HEROES:</h4>
                        <img src="static/images/images-old/roma_grey.png" title="Raman"/>
                        <img src="static/images/images-old/vlada_grey.png" title="Vlada"/>
                        <img src="static/images/images-old/dina_grey.png" title="Dina"/>
                    </div>

                    <div className="clearfix"></div>
                </div>
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
        <footer  className="site-footer">© creativeit.io, 2016</footer>
        {/* <!-- inject:js -->
        <!-- endinject --> */}
        <script>
            {/* (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-86545481-1', 'auto');
            ga('send', 'pageview'); */}
        </script>
    </div>
</div>