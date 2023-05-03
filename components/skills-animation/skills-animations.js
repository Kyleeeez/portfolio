import {motion} from "framer-motion";
import styles from './skills-animation.module.scss';
import Image from 'next/image';

const skills = [
    {
        src: "/images/react.svg",
        alt: "React logo"
    },
    {
        src: "/images/figma.svg",
        alt: "Figma logo"
    },
    {
        src: "/images/sass.svg",
        alt: "SASS logo"
    },
    {
        src: "/images/ts.svg",
        alt: "TS logo"
    },
    {
        src: "/images/next.svg",
        alt: "NextJS logo"
    },
    {
        src: "/images/jest.svg",
        alt: "Jest logo"
    },
]

export const SkillsAnimation = () => (

    <div className="mx-auto order-1 lg:order-2 md:-mt-14">
        <div className="relative inline-block scale-75 md:scale-100 -mt-10 md:mt-0">


            <video preload playsInline poster="" autoPlay loop muted width="170"
                   className="rounded-full absolute border border-8 border-gray-100 dark:border-slate-600"
                   style={{width: 170, height: 170, right: 105, top: 105}}>
                <source src="/vid.mp4" type="video/mp4"/>
            </video>

            <motion.div

                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 85, ease: "linear" }}
                className={styles.circles + " border border-gray-200 dark:border-white/10 "}>
                {
                    skills.map(({src, alt}, i) =>
                        <SkillContainer
                            key={i}>
                            <div
                                className="bg-gray-100/80 dark:bg-slate-600 w-[80px] h-[80px] p-4 overflow-hidden rounded-full">
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </SkillContainer>
                    )
                }
            </motion.div>
        </div>
    </div>
)

export const SkillContainer = ({children}) => {
    return (
        <motion.div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 85, ease: "linear" }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}