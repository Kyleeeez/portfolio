import { motion } from "framer-motion";

export function Switch({ theme, switchTheme, ...props }) {
    return (
        <button className={'switch ' + theme} {...props}  onClick={switchTheme}>
            <motion.div animate={theme === "light" ? {x:25} : {x:0}} />
        </button>
    );
}
