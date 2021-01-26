import Head from 'next/head'
import { useTheme } from "next-themes"
import {useEffect, useState} from "react";
import {Switch} from "../components/switch";

export default function Home() {

    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const [isOn, setIsOn] = useState(false);


    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"container"}>
          <button
              className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all" onClick={switchTheme}>
              Change theme
          </button>


          <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />


      </main>

      <footer>
          footer
      </footer>
    </div>
  )
}
