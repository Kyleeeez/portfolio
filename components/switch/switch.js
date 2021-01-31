import { motion } from "framer-motion";
import styles from './switch.module.scss';

export function Switch({ theme, switchTheme = 'light', ...props }) {
    return (
        <button className={styles.switch + ' ' + (theme === "light" ? "bg-gray-300" : "bg-gray-700")} {...props}  onClick={switchTheme}>
            <motion.div className={"transition-colors " + (theme === "light" ? "bg-gray-900" : "bg-white")} animate={theme === "light" ? {x:25} : {x:0}} />
        </button>
    );
}
