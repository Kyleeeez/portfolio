import { motion } from "framer-motion";

export function Switch({ isOn, ...props }) {

    return (
        <div className={'switch'} {...props}>
            <motion.div animate={isOn ? {x:25} : {x:0}} />
        </div>
    );
}
