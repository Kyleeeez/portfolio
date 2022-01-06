import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";

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

export const CareerSection = ({match, history}) => (
    <div className={"flex space-x-10"}>
        {projects.map(({slug, title}) => (
            <Project key={slug} slug={slug} title={title}/>
        ))}
    </div>
);

function Project({slug, title}) {
    return (
        <Link href={'projects/' + slug}>
            <div className={"bg-slate-700 cursor-pointer"}>
                <motion.div className={"inline-block"} layoutId={slug + "title"}>{title}</motion.div>

                <motion.figure layoutId={slug + "cover"}>
                    <img src="https://via.placeholder.com/150" layout="responsive" width={780} height={501} />
                </motion.figure>

            </div>
        </Link>

    )
}
