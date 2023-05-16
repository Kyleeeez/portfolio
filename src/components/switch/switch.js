import {motion} from "framer-motion";
import styles from './switch.module.scss';
import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";

export function Switch({theme, switchTheme, ...props}) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="relative">

            <MoonIcon
                className="absolute top-1 left-1 h-4 w-4 text-slate-800/40 dark:text-primary pointer-events-none z-10"/>
            <SunIcon className="absolute top-1 right-1 h-4 w-4 text-white dark:text-white/50 pointer-events-none z-10"/>

            <button aria-label="Alternate between light and dark theme"
                    className={styles.switch + ' ' + (theme === "light" ? "bg-dark/10" : "bg-gray-100/10")} {...props}
                    onClick={switchTheme}>
                <motion.div className={"transition-colors " + (theme === "light" ? "bg-yellow-500" : "bg-white")}
                            animate={theme === "light" ? {translateX: 25} : {translateX: 0}}/>
            </button>

        </div>
    );
}
