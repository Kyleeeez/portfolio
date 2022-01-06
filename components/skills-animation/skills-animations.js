import {motion} from "framer-motion";
import styles from './skills-animation.module.scss';
import Image from 'next/image';
const skills = [
    {
        src: "/images/react.svg",
        alt: "React Logo"
    },
    {
        src: "/images/figma.svg",
        alt: "Figma Logo"
    },
    {
        src: "/images/css3.svg",
        alt: "CSS3 Logo"
    },
    {
        src: "/images/js.svg",
        alt: "JS Logo"
    },
    {
        src: "/images/next.svg",
        alt: "NextJS Logo"
    },
    {
        src: "/images/html5.svg",
        alt: "HTML5 Logo"
    },
]

export const SkillsAnimation = () => (

    <div className="absolute right-10 -top-20 -mt-5 hidden lg:block">


        <video autoPlay loop muted width="170" className="rounded-full absolute light-shadow" style={{width: 170, height: 170, right: 155, top: 205}} >
            <source src="/vid.mp4"
                    type="video/mp4"/>
        </video>

        <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 85, ease: "linear" }}
            className={styles.circles}>
            {
                skills.map(({src, alt}, i) =>
                    <SkillContainer
                        key={i}>
                        <Image
                            src={src}
                            alt={alt}
                            width={50}
                            height={50}
                        />
                    </SkillContainer>
                )
            }
        </motion.div>
    </div>
)

export const SkillContainer = ({children}) => {
    return (
        <div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 85, ease: "linear" }}>

                <div
                    className={styles.container + " pt-2"}
                >
                    {children}
                </div>
            </motion.div>
        </div>
    )
}