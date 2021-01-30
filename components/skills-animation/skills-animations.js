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
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className={styles.circles}>
        {
            skills.map(({src, alt}) =>
                <SkillContainer>
                    <Image
                        src={src}
                        alt={alt}
                        width={100}
                        height={100}
                    />
                </SkillContainer>
            )
        }
    </motion.div>
)

const SkillContainer = ({children}) => {
    return (
        <div>
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}>

                <motion.div
                    whileHover={{scale:1.05}}
                    className={styles.container + " pt-2"}
                    drag
                    dragElastic={0.2}
                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    )
}