import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact';
// import "../styles/main-section.scss";
import '../styles.scss';

const MainSection = () => <div className="main-section">
    <header className="header">
        <Link href="/">
            <a className="header__logo"></a>
        </Link>
        <a href="#contact" className="header__contact">Contact us</a>
    </header>
    <div className="main-section-wrap">
        <div className="main-section-content">
            <h1 className="main-section-content__title">trustworthy <br/>
            <span className="main-section-content__title-react">React</span> development<br/>
            partner</h1>
            <p className="main-section-content__text">We create products for startups and Fortune-500 companies. They trust us as we provide React development services tailored exactly to unique business and people needs.</p>
        </div>
        <div className="main-section-bottom">
            <div className="main-section-trust">
                <h3 className="main-section-trust__title">They trust us</h3>
                <div className="main-section-trust__list">
                    <div className="main-section-trust__list-item main-section-trust__list-item--harvard"></div>
                    <div className="main-section-trust__list-item main-section-trust__list-item--pandg"></div>
                    <div className="main-section-trust__list-item main-section-trust__list-item--renault"></div>
                </div>
            </div>
            <div className="main-section-trust">
                <h3 className="main-section-trust__title">They confirm us</h3>
                <div className="main-section-trust__list">
                    <div className="main-section-trust__list-item main-section-trust__list-item--clutch"></div>
                    <div className="main-section-trust__list-item main-section-trust__list-item--github"></div>
                    <div className="main-section-trust__list-item main-section-trust__list-item--upwork"></div>
                </div>
            </div>
        </div>
    </div>
</div>

const FEATURED_DATA = {
    "projectList": [
        {
            "orientation": 'left',
            "image": "template-marketplace.png",
            "title": "A global sales leader in the React admin template marketplace",
            "list": [
                "integrated advanced maps", "server-side rendering", "delivered by one engineer in 3 months"
            ],
            "projectLink": '',
            "caseStudyLink": 'case.stydy'
        },
        {
            "orientation": 'right',
            "image": "edtech.png",
            "title": "Rescue existing code after TopTal to make EdTech app release",
            "list": [
                "rewriting the code from scratch", "cross-platform audio support", "video lessons for Android 9, 10 and iOS 12, 13", "offline mode", "React Native"
            ],
            "projectLink": 'deepenglish.com',
            "caseStudyLink": ''
        },
        {
            "orientation": 'left',
            "image": "inch.png",
            "title": "A multi-page website for a real estate company",
            "list": [
                "integrated advanced maps", "server-side rendering", "delivered by one engineer in 3 months"
            ],
            "projectLink": '',
            "caseStudyLink": 'case.stydy'
        }
    ]
};

const FeaturedSection = ({data}) => (
    <section className={data.orientation === 'left' ? "featured-project featured-project--left" : "featured-project featured-project--right"}>
        <img src={`/static/images/${data.image}`} alt="" className="featured-project__img"/>
        <div className="featured-project__content">
        <h3 className="featured-project__title">{data.title}</h3>
            <ul className="featured-project__list">
                {data.list.map((text, i) => (
                    <li key={i} className="featured-project__item">{text}</li>
                ))}
            </ul>
            {data.caseStudyLink && (
                <a href={data.caseStudyLink} className="featured-project__case">Case study</a>
            )}
            {data.projectLink && (
                <a href={data.projectLink} className="featured-project__link">{data.projectLink}</a>
            )}

        </div>
    </section>
)

const Featured = () => {
    return (
        <div className="featured">
            <h2 className="featured__title">Featured React projects</h2>
            <p className="featured__text">With our small team we deliver products for worldwide markets.</p>
            <div className="featured__list">
                {FEATURED_DATA.projectList.map((item, i) => <FeaturedSection key={i} data={item}/>)}
            </div>
        </div>
    )
}

const DATA_SERVICES = [
    {
        "img": "scratch.svg",
        "title": "Web app development from scratch",
        "text": "The secret ingredient for this strategy is to find a right balance between rapid development and overengineering. In this case we focus on key features to launch MVP product to the market fast, grab the first users feedback and validate it on the real market."
    },
    {
        "img": "monetization.svg",
        "title": "Web app modernization",
        "text": "Do you have outdated UI and legacy code that block product growth? Using your knowledge base we move your product on the next level using cutting-edge React tech stack on predictable timeline."
    },
    {
        "img": "custom.svg",
        "title": "Custom UI/UX design using React",
        "text": "We dive deeply into your business to build a consistent user experience and intuitive powerful design. From analysis to interactive prototypes we do it through the constant iterative design improvements."
    },
    {
        "img": "consulting.png",
        "title": "React development consulting",
        "text": "Figuring out tech challenges is our passion. We don’t afraid to work with existing code base and deliver elegant solution thanks to rich experience in solving complex tasks."
    }
]

const ServicesItem = ({data}) => (
    <div className="services-item">
        <img src={`/static/images/${data.img}`} alt="" className="services-item__img"/>
    <h3 className="services-item__title">{data.title}</h3>
        <p className="services-item__text">{data.text}</p>
    </div>
)

const Services = () => (
    <div className="services">
        <div className="services__block">
            <h2 className="services__title">React development services we provide</h2>
            <p className="services__text">Each project needs unique development process. We apply the right strategy to reach the result efficiently.</p>
        </div>
        <div className="services__list">
            {DATA_SERVICES.map((item, i) => <ServicesItem key={i} data={item}/>)}
        </div>
    </div>
)

const DATA_CUSTOMERS = [
    {
        "quote": `“They combine a range of skills and <span>exceptional responsiveness</span>. It's very difficult to find both of these in one place.”`,
        "avatar": "nda.png",
        "name": "",
        "role": "Professor at Harvard Business School, USA"
    },
    {
        "quote": `“CreativeIT’s ability to provide a complete product in <span>a timely fashion</span> was most impressive. In addition, communication was always clear.”`,
        "avatar": "person-m.png",
        "name": "Michael Oppel",
        "role": "CFO at Audience Response System, USA"
    },
    {
        "quote": `“CreativeIT picked up where <span>a previous vendor left off</span>. They looked at the existing code and designs and created a plan for how to move forward.”`,
        "avatar": "person-c.png",
        "name": "Elliot Ledley",
        "role": "Project Manager at 2Shoes, USA"
    }
]

const CustomerReview = ({data}) => {
    return (
        <section className="customer-review">
            <p className="customer-review__quote" dangerouslySetInnerHTML={{__html: data.quote}}/>
            <div className="customer-review-profile">
                <img src={`/static/images/${data.avatar}`} alt="" className="customer-review-profile__img"/>
                <div className="customer-review-profile__body">
                <h4 className="customer-review-profile__name">{data.name}</h4>
                <p className="customer-review-profile__description">{data.role}</p>
                </div>
            </div>
        </section>
    )
}

const Customers = () => {
    return (
        <div className="customers">
            <h2 className="customers__title">Our customers</h2>
            <p className="customers__text">What they say about us</p>
            <div className="customers__list">
                {DATA_CUSTOMERS.map((item, i) => <CustomerReview key={i} data={item}/>)}
            </div>
            <a href="clutch.com" className="customers__link">
                Read more reviews on <span className="customers__link--underline">CLUTCH</span>
            </a>
        </div>
    )
}

const QUALITY_LIST = [
    {
        img: 'engineers.svg',
        text: 'Proactive professionals who can collaborate and communicate with your team easily'
    },
    {
        img: 'start.png',
        text: 'Quick start and fast onboarding thanks to minimum of red tape'
    },
    {
        img: 'kiss.png',
        text: 'Following KISS principle and using cutting-edge technologies we reach incredible result '
    },
    {
        img: 'achievments.png',
        text: 'Trusted by GitHub community and lead local tech educational courses'
    }
]

const QualityItem = ({data}) => {
    return (
        <div className="quality-item">
            <img src={`/static/images/${data.img}`} alt="" className="quality-item__img"/>
            <p className="quality-item__text">{data.text}</p>
        </div>
    )
}

const WhoWeAre = () => {
    return (
        <div className="who">
            <div className="who__block">
                <h2 className="who__title">WE are React engineers</h2>
                <p className="who__text">And also we are T-shaped developers who focus on product, business goals and end-consumers.</p>
            </div>
            <div className="who__list">
                {QUALITY_LIST.map((item, i) => <QualityItem key={i} data={item}/>)}
            </div>
        </div>
    )
}

const Team = () => {
    return (
        <div className="team">
            <div className="team__wrap">
                <h2 className="team__title">Meet the Head <br/>of our React development team</h2>
                <div className="team-member__head-mobile">
                    <h3 className="team-member__name">Ihnat Kryshchyk</h3>
                    <h4 className="team-member__role">Head of React development team</h4>
                </div>
                <div className="team-member">
                    <img src="/static/images/ihnat.png" alt="ihnat" className="team-member__avatar"/>
                    <div className="team-member__content">
                        <h3 className="team-member__name">Ihnat Kryshchyk</h3>
                        <h4 className="team-member__role">Head of React development team</h4>
                        <p className="team-member__description">Observing a bright future of your product and, as a React team lead, asking all water gods to give energy and rise application tech power.</p>
                        <div className="team-member__networking">
                            <a href="" className="team-member__networking-item team-member__networking-item--linkedin"></a>
                            <a href="" className="team-member__networking-item team-member__networking-item--github"></a>
                        </div>
                    </div>
                </div>
                <p className="team-member__description-mobile">Observing a bright future of your product and, as a React team lead, asking all water gods to give energy and rise application tech power.</p>
            </div>
        </div>
    )
}

const TechItem = ({data}) => (
    <div className="tech-item">
        <i className={`tech-item__icon tech-item__icon--${data.id}`}></i>
        <span className="tech-item__name">{data.text}</span>
    </div>
)

const TECH_LIST = [
    {id: "redux", text: "Redux"},
    {id: "aws", text: "AWS"},
    {id: "bootstrap", text: "Bootstrap"},
    {id: "rest", text: "Rest API"},
    {id: "node", text: "Node.js"},
    {id: "ant", text: "Ant Design"},
    {id: "graph-ql", text: "GraphQl"},
    {id: "python", text: "Python"},
    {id: "material", text: "Material Design"},
    {id: "react-native", text: "React Native"}
]

const How = () => {
    return (
        <div className="how">
            <h2 className="how__title">how we cook React applications</h2>
            <p className="how__text">We use React ecosystem for creating web products including SaaS, fintech, reporting, data management and predictive analytics solutions.</p>
            <div className="how__list">
                {TECH_LIST.map((item, i) => <TechItem key={i} data={item}/>)}
            </div>
        </div>
    )
}

// const Contact = () => {
//     return (
//         <div className="contact">
//             Contact form
//         </div>
//     )
// }

const Hey = () => (
    <div className="hey">
        <div className="hey__wrap">
            <img src="./images/raman.png" alt="" className="hey__avatar"/>
            <div className="hey__content">
                <h3 className="hey__title">Hey, THERE!</h3>
                <p className="hey__text">My name is Raman, I am a CEO at CreativeIT. We can arrange a meeting directly on Skype.</p>
                <span className="hey__skype">
                    <i className="hey__skype-icon"></i>
                    raman.andryianau
                </span>
            </div>
        </div>
    </div>
)

const Footer = () => {
    return (
        <footer className="landing-footer">
            <div className="landing-footer__top">
                <a href="" className="landing-footer__logo"></a>
                <div className="landing-footer__network">
                    <a href="" className="landing-footer__network-item footer__network-item--fb"></a>
                    <a href="" className="landing-footer__network-item footer__network-item--in"></a>
                    <a href="" className="landing-footer__network-item footer__network-item--github"></a>
                    <a href="" className="landing-footer__network-item footer__network-item--drible"></a>
                    <a href="" className="landing-footer__network-item footer__network-item--fb"></a>
                </div>
                <div className="landing-footer__top-right">
                    <p className="landing-footer__location">Based in Minsk, Belarus, <br/>Eastern Europe (UTC +3)</p>
                    <a href="mailto:hello@creativeit.io" className="landing-footer__email">hello@creativeit.io</a>
                </div>
            </div>
            <div className="landing-footer__bottom">
                <span className="landing-footer__copyright">
                    © 2020 creativeit
                </span>
            </div>
        </footer>
    )
}

export default () => <div className="react-landing">
    <Head>
        <title>React landing</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
    </Head>
    <MainSection/>
    <Featured/>
    <Services/>
    <Customers/>
    <WhoWeAre/>
    <Team/>
    <How/>
    <Contact/>
    <Hey/>
    <Footer/>
</div>