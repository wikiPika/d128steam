import React, {useEffect, useState, useRef} from 'react'
import logo from './img/logo.png'
import './App.scss'
import "@fontsource/karla/variable.css"
import "@fontsource/karla/"
import {motion} from "framer-motion"

// @ts-ignore
import Holder from "holderjs"

// @ts-ignore
import NET from "vanta/dist/vanta.net.min"
import {animBounceRight, animOpacity} from "./components/Animations";

function App() {
    const [vantaEffect, setVantaEffect] = useState<any>()
    const vantaRef = useRef(null);

    const [netDensity, setNetDensity] = useState<number>(10)

    useEffect(() => Holder.run(), [])

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
                <img src={logo} className="top-logo"/>

                <div className="top-title">
                    D128 ST3AM
                </div>
                <div className="top-subtitle">
                    2022 Showcase
                </div>

                <motion.button className="top-button"
                               onClick={() => window.open("https://docs.google.com/forms/d/1b4T3Zslpe3wDxnPOZUf1r3TV4gzBZQgU48mIjwkL780/")}
                               variants={animOpacity(0.5)}
                               initial="inactive"
                               animate="active"
                               whileHover={{scale: 1.1}}
                               whileTap={{scale: 0.9}}
                >
                    Sign Up
                </motion.button>
            </div>
            <div className="body f-grow w-100 f-col-sc w-100">
                <div className="f-row-bc w-100 banner">
                    <div className="img-container">
                        <img className="banner-left-img" src={"https://campussuite-storage.s3.amazonaws.com/prod/1059662/301794b6-30da-11e7-9e05-124f7febbf4a/1724428/323decb2-375c-11e8-93a8-12ad176a40de/optimizations/1"}/>
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
                            Your work will be evaluated by local businesses. The highest-rated projects in each division will win the best prizes.
                        </div>
                    </div>
                    <div className="img-container">
                        <img className="banner-right-img" src={"https://www.dailyherald.com/storyimage/DA/20200423/BUSINESS/200429653/EP/1/2/EP-200429653.jpg&updated=202004231946&MaxW=900&maxH=900&noborder&Q=80"} />
                    </div>
                </div>
                <div className="columns f-row-ct w-100">
                    <div className="left-column f-col-sc">
                        <div className="f-col-sc">
                            <motion.div className="card f-col-sc" style={{marginTop: "16rem",}}
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
                    </div>
                    <div className="right-column f-col-sc">
                        <div className="f-col-sc">
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
                                <CardBlip date={"2021/11/30"} size={7}>
                                    Complete the sign-up form linked at the <span className="card-bold link" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>top</span> of the website.
                                </CardBlip>
                                <CardBlip date={"2021/12/13"} size={7}>
                                    Submit your project to the judges along with a 2 minute presentation.
                                </CardBlip>
                                <CardBlip date={"2021/12/15"} size={7}>
                                    Projects from VHHS will be showcased during lunch periods.
                                </CardBlip>
                                <CardBlip date={"2021/12/16"} size={7}>
                                    Projects from LHS will be showcased during lunch periods.
                                </CardBlip>
                                <CardBlip date={"2021/12/18"} size={7}>
                                    The award ceremony will be held simultaneously at VHHS and on Zoom.
                                </CardBlip>
                            </motion.div>
                        </div>
                        <div className="f-col-sc">
                            <motion.div className="card f-col-sc"
                                 variants={animBounceRight(300, 125, 0.5, 40)}
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
                    </div>
                </div>
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
                    whileInView="active"
                    viewport={{once: true,}}
        >
            <div className="card-blip-date" style={{width: props.size + "rem", textAlign: "end",}}>
                {props.date}
            </div>
            <div className="card-blip-text f-grow">
                {props.children}
            </div>
        </motion.div>
    )
}

export default App;
