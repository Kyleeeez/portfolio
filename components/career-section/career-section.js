import Link from "next/link";
import {motion} from "framer-motion";

export const projects = [
    // Photo by ivan Torres on Unsplash
    {
        slug: "ce",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
    },
    // Photo by ivan Torres on Unsplash
    {
        slug: "ca",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
    },
    // Photo by ivan Torres on Unsplash
    {
        slug: "cx",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
    },
    // Photo by ivan Torres on Unsplash
    {
        slug: "ct",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
    },
];

export const ProjectSection = () => (
    <div className={"relative py-14"} id={"career"}>
        <div className={"text-yellow-300 tracking-wide text-4xl font-bold font-display"}>
            Projects
        </div>
        <div className={"flex space-x-10"}>
            {projects.map(({slug, title}) => (
                <Project slug={slug} title={title} key={slug} />
            ))}
        </div>
    </div>
);

function Project({slug, title}) {
    return (
        <Link href={'projects/' + slug}>
            <div className={"bg-gray-700 cursor-pointer"}>
                <motion.div className={"inline-block"} layoutId={slug + "title"}>{title}</motion.div>

                <motion.figure layoutId={slug + "cover"}>
                    <img src="https://via.placeholder.com/800x200" width={780} height={501} alt={title + " cover image"}/>
                </motion.figure>

            </div>
        </Link>

    )
}
