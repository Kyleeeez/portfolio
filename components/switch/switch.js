import { motion } from "framer-motion";
import styles from './switch.module.scss';

export function Switch({ theme, switchTheme, ...props }) {
    return (
        <button  aria-label="Alternate light or dark theme" className={styles.switch + ' ' + (theme === "light" ? "bg-gray-300" : "bg-gray-100/10")} {...props}  onClick={switchTheme}>
            <motion.div className={"transition-colors " + (theme === "light" ? "bg-slate-900" : "bg-white")} animate={theme === "light" ? {x:25} : {x:0}} />
        </button>
    );
}
