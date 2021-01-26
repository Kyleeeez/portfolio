import { motion } from "framer-motion";

export function Switch({ theme, ...props }) {
    return (
        <button className={'switch ' + theme} {...props}>
            <motion.div animate={theme === "light" ? {x:25} : {x:0}} />
        </button>
    );
}
