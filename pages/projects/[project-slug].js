import {motion} from 'framer-motion'
import {projects} from "../../components/career-section/career-section";

export default function ProjectDetail({projectData: {
                                              slug,
                                              category,
                                              title,
                                          }
                                      }) {
    return (
        <>
            <motion.figure layoutId={slug + "cover"}>
                <img src="https://via.placeholder.com/800x200" className={"w-full"} height={200}/>
            </motion.figure>


            <motion.div className={"inline-block font-bold text-4xl"} layoutId={slug + "title"}>
                {title}
            </motion.div>
            <motion.p initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}}>{category}</motion.p>
        </>
    )
}

export function getStaticProps({params: {"project-slug": projectSlug}}) {

    const projectData = projects.find(({slug}) => slug === projectSlug);

    return {props: {projectData}}
}

export function getStaticPaths() {
    return {
        paths: projects.map(({slug}) => ({
            params: {
                "project-slug": slug,
            },
        })),
        fallback: false,
    }
}
