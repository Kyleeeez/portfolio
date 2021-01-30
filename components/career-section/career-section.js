import {useState} from "react";
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion'

const cardsData = [
    // Photo by ivan Torres on Unsplash
    {
        id: "c",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
    },
];

export const CareerSection = ({match, history}) => (
    <div>
        {cardsData.map(card => (
            <Card value={'test'}/>
        ))}
    </div>
);

function Card({value}) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(open => !open)}>click</button>
            <AnimateSharedLayout>
                    <motion.div layout>

                    {
                        open ?
                            <motion.div layout>
                                <div layoutId={'tests'} className={"bg-gray-300 w-10 h-10"}>bohy</div>
                            </motion.div>
                            :
                            <motion.div layout>
                                <div layoutId={'tests'} className={"bg-gray-300 w-10 h-10"}>bohyee</div>
                            </motion.div>
                    }
                    </motion.div>
            </AnimateSharedLayout>
        </div>

    )
}