import React, {useEffect, useState, useRef} from 'react'
import logo from './img/logo.png'
import './App.scss'
import "@fontsource/karla/variable.css"
import "@fontsource/karla/"
import {AnimateSharedLayout, motion} from "framer-motion"

/*
TODO: Link sponsor image to sponsor website, add "Contact Lueken for sponsorship opportunities"
 */

// @ts-ignore
import Holder from "holderjs"

// @ts-ignore
import NET from "vanta/dist/vanta.net.min"
import {animBounceRight, animOpacity, transitSpring} from "./components/Animations";

function App() {
    const [vantaEffect, setVantaEffect] = useState<any>()
    const vantaRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        Holder.run()
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x8993d7,
                backgroundColor: 0x0b0b22,
                maxDistance: 25.00,
                spacing: 20.00,
                points: 15,
                showDots: false
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className="f-col-sc apex">
            <div className="f-col-cc top-vanta" ref={vantaRef}>
                <img src={logo} alt="VHHS Cougars logo" className="top-logo"/>

                <div className="top-title">
                    D128 ST3AM
                </div>
                <div className="top-subtitle">
                    2021 Showcase
                </div>

                <motion.button className="top-button"
                               onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfXEzIaKRAywfgTX-5r3NFZYxrWdliK8l77lII0Nl8zdpPfNA/viewform?usp=sf_link")}
                               variants={animOpacity(0.5)}
                               initial="inactive"
                               animate="active"
                               whileHover={{scale: 1.1}}
                               whileTap={{scale: 0.9}}
                >
                    Sign Up
                </motion.button>
            </div>
            <div className="body f-grow w-100 f-col-sc">
                <div className="f-row-bc w-100 banner">
                    <div className="img-container f-grow">
                        <img className="banner-left-img" alt={"D128 DARING"} src={"https://campussuite-storage.s3.amazonaws.com/prod/1059662/301794b6-30da-11e7-9e05-124f7febbf4a/1724428/323decb2-375c-11e8-93a8-12ad176a40de/optimizations/1"}/>
                    </div>
                    <div className="banner-desc f-col-cc">
                        <div className="banner-desc-title">
                            Show us your ST3AM best.
                        </div>
                        <div className="banner-desc-subtitle">
                            Whether that be in Science, Tech, Engineering, Entrepreneurship, Equity, Arts, or Math, now's your chance to get creative, tackle real-world problems, and get rewarded.
                        </div>
                    </div>
                </div>
                <div className="f-row-bc w-100 banner">
                    <div className="banner-desc f-col-cc">
                        <div className="banner-desc-title">
                            Impress and win big.
                        </div>
                        <div className="banner-desc-subtitle">
                            Open to all VHHS and LHS students! Your work will be evaluated by local businesses. The highest-rated projects in each division will win the best prizes.
                        </div>
                    </div>
                    <div className="img-container f-grow">
                        <img className="banner-right-img" alt="LHS picture" src={"https://www.dailyherald.com/storyimage/DA/20200606/NEWS/200609240/AR/0/AR-200609240.jpg&updated=202006190613&MaxW=900&maxH=900&noborder&Q=80"} />
                    </div>
                </div>
                <div className="p-4 w-100 f-col-cc">
                    <motion.div className="sponsors-card f-row-ct"
                                variants={animOpacity(2)}
                                initial="inactive"
                                whileInView="active"
                                viewport={{once: true}}
                    >
                        <div className="sponsors-card-text sponsors-gold">
                            Gold Sponsors
                        </div>
                        <div className="sponsors-card-box f-grow f-col-sc">
                            <img src="https://www.myrobothink.com/wp-content/uploads/2020/01/logo-with-slogan.png" />
                        </div>
                    </motion.div>
                </div>
                <div className="p-4 w-100 f-col-cc">
                    <motion.div className="sponsors-card f-row-ct"
                                variants={animOpacity(2)}
                                initial="inactive"
                                whileInView="active"
                                viewport={{once: true}}
                    >
                        <div className="sponsors-card-text sponsors-silver">
                            Silver Sponsors
                        </div>
                        <div className="sponsors-card-box f-grow f-col-sc">
                            Your company could be here!
                        </div>
                    </motion.div>
                </div>
                <div className="p-4 w-100 f-col-cc">
                    <motion.div className="sponsors-card f-row-ct"
                                variants={animOpacity(2)}
                                initial="inactive"
                                whileInView="active"
                                viewport={{once: true}}
                    >
                        <div className="sponsors-card-text sponsors-bronze">
                            Bronze Sponsors
                        </div>
                        <div className="sponsors-card-box f-grow f-col-sc">
                            Your company could be here!
                        </div>
                    </motion.div>
                </div>
                <AnimateSharedLayout>
                    <div className="columns w-100" style={screenWidth > 1152 ? {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "stretch",
                    } : {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "stretch",
                    }}>
                        <motion.div className="left-column f-col-sc" style={screenWidth <= 1152 ? {
                            width: "100%",
                            paddingTop: "0rem",
                        } : {}} layout>
                            {rubricCard}
                            {contactCard}
                        </motion.div>
                        <motion.div className="right-column f-col-sc" style={screenWidth <= 1152 ? {
                            width: "100%",
                        } : {}} layout>
                            {timelineCard}
                            {faqCard}
                        </motion.div>
                    </div>
                </AnimateSharedLayout>
            </div>

            <div className="footer w-100 f-row-cc">
                Copyright 2021 wikiLabs. Some rights reserved.
            </div>
        </div>
    );
}

function CardBlip(props: {
    date: string | any,
    children?: any,
    size: number,
}) {
    return(
        <motion.div className={"card-blip f-row-cs"}
                    variants={animOpacity(2)}
                    initial="inactive"
                    whileHover={{
                        borderRadius: "1px solid white",
                        transition: transitSpring(125, 0, 40)
                    }}
                    whileInView="active"

                    viewport={{once: true,}}
        >
            <div className="card-blip-date" style={{minWidth: props.size + "rem", maxWidth: props.size + "rem", textAlign: "end",}}>
                {props.date}
            </div>
            <div className="card-blip-text f-grow">
                {props.children}
            </div>
        </motion.div>
    )
}

function ClickableImg(props: {
    src: string,
}) {
    return (
        <motion.img style={{
                        cursor: "pointer",
                    }}
                    variants={animOpacity(2)}
                    initial="inactive"
                    whileInView="active"
                    viewport={{once: true,}}>
            src={props.src}
        </motion.img>
    )
}

const faqCard = <div className="f-col-sc">
    <motion.div className="card f-col-sc"
                variants={animBounceRight(300, 125, 0.5, 40)}
                initial="inactive"
                whileInView="active"
                viewport={{once: true}}
    >
        <div className="card-title">
            FAQs
            <div className="h-bar" />
        </div>
        <CardBlip date={"Q"} size={3}>
            What kinds of problems should I tackle? I'm lost!
        </CardBlip>
        <CardBlip date={"A"} size={3}>
            Try the UN Development Goals <span className="card-bold link" onClick={() => window.open("https://sdgs.un.org/goals")}>website</span> for ideas. Think big, and think impactful.
        </CardBlip>
        <div className="convenient-spacer" />
        <CardBlip date={"Q"} size={3}>
            What is the overall division? Can I eat it?
        </CardBlip>
        <CardBlip date={"A"} size={3}>
            If you sign up for 3 or more divisions, you're automatically entered. Your average score across your divisions will be your overall score. (And no, it's not edible.)
        </CardBlip>
        <div className="convenient-spacer" />
        <CardBlip date={"Q"} size={3}>
            Can I win multiple divisions? Pretty please?
        </CardBlip>
        <CardBlip date={"A"} size={3}>
            Mmm, no, you can only win one division in total, including the overall. We want to give other projects the spotlight, too.
        </CardBlip>
        <div className="convenient-spacer" />
        <CardBlip date={"Q"} size={3}>
            How will prizes work?
        </CardBlip>
        <CardBlip date={"A"} size={3}>
            Each entry will receive prizes based on its performance. If you're entering as a group, it's up to your team to divvy up prizes.
        </CardBlip>
    </motion.div>
</div>

const timelineCard = <div className="f-col-sc">
    <motion.div className="card f-col-sc"
                variants={animBounceRight(300, 125, 0.5, 40)}
                initial="inactive"
                whileInView="active"
                viewport={{once: true}}
    >
        <div className="card-title">
            Timeline
            <div className={"h-bar"} />
        </div>
        <CardBlip date={"11/30"} size={4}>
            Complete the sign-up form linked at the <span className="card-bold link" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>top</span> of the website.
        </CardBlip>
        <CardBlip date={"12/20"} size={4}>
            Submit your project to the judges along with a 2 minute presentation.
        </CardBlip>
        <CardBlip date={"12/21"} size={4}>
            Projects from VHHS will be showcased during lunch periods.
        </CardBlip>
        <CardBlip date={"12/21"} size={4}>
            Projects from LHS will be showcased during lunch periods.
        </CardBlip>
        <CardBlip date={"12/22"} size={4}>
            The award ceremony will be held simultaneously at VHHS and on Zoom.
        </CardBlip>
    </motion.div>
</div>

const rubricCard = <div className="f-col-sc">
    <motion.div className="card f-col-sc"
                variants={animBounceRight(-300, 125, 0.5, 40)}
                initial="inactive"
                whileInView="active"
                viewport={{once: true}}
    >
        <div className="card-title">
            Rubric
            <div className={"h-bar"} />
        </div>
        <CardBlip date={"30pts."} size={4}>
            <span className="card-bold">Problem Identification:</span> How pertinent is your problem?
        </CardBlip>
        <CardBlip date={"30pts."} size={4}>
            <span className="card-bold">Solution:</span> How feasible and logical is your project?
        </CardBlip>
        <CardBlip date={"20pts."} size={4}>
            <span className="card-bold">Creativity:</span> How innovative and DARING is your project?
        </CardBlip>
        <CardBlip date={"20pts."} size={4}>
            <span className="card-bold">Theme:</span> How well does your project fit the theme? (TBD)
        </CardBlip>
        <CardBlip date={"10pts."} size={4}>
            <span className="card-bold">Presentation:</span> How professional and engaging is it?
        </CardBlip>
    </motion.div>
</div>

const contactCard = <div className="f-col-sc">
    <motion.div className="card f-col-sc"
                variants={animBounceRight(-300, 125, 0.5, 40)}
                initial="inactive"
                whileInView="active"
                viewport={{once: true}}
    >
        <div className="card-title">
            Contact
            <div className={"h-bar"} />
        </div>
        <CardBlip date={<div>Adam Lueken</div>} size={10}>
            <div className="w-100 f-col-ss">
                <div>
                    Big Daddy-O
                </div>
                <div>
                    <span className="card-bold link" onClick={() => window.open("mailto:adam.lueken@d128.org", "_self")}
                          style={{
                              fontSize: "70%",
                          }}
                    >
                        adam.lueken@d128.org
                    </span>
                </div>
            </div>
        </CardBlip>
        <CardBlip date={<div>Shayna Weinstein</div>} size={10}>
            <div className="w-100 f-col-ss">
                <div>
                    Organizer
                </div>
                <div>
                    <span className="card-bold link" onClick={() => window.open("mailto:shayna.weinstein@dvhhscougars.org", "_self")}
                          style={{
                              fontSize: "70%",
                          }}
                    >
                        shayna.weinstein@vhhscougars.org
                    </span>
                </div>
            </div>
        </CardBlip>
        <CardBlip date={<div>Jackie Liu</div>} size={10}>
            <div className="w-100 f-col-ss">
                <div>
                    Web Developer
                </div>
                <div>
                    <span className="card-bold link" onClick={() => window.open("mailto:jackie.liu@vhhscougars.org", "_self")}
                          style={{
                              fontSize: "70%",
                          }}
                    >
                        jackie.liu@vhhscougars.org
                    </span>
                </div>
            </div>
        </CardBlip>
    </motion.div>
</div>

export default App;
