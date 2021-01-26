import Head from 'next/head'
import { useTheme } from "next-themes";
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

          <Switch theme={theme} onClick={switchTheme}/>


        </main>

        <footer>
          footer
        </footer>
      </div>
  )
}
