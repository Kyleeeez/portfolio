import Head from 'next/head'
import { useTheme } from "next-themes";
import {useEffect, useState} from "react";
import {Switch} from "../components/switch";

export default function Home() {

  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

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

          <header className={"container flex justify-between p-5"}>
              <div className={"transform-gpu pr-3 lg:-translate-x-full inline-block mr-10"}>test</div>

              <div className={"flex space-x-10"}>
                  <a className={"link"} href={"#"}>Projects</a>
                  <a className={"link"} href={"#"}>About</a>
                  <Switch theme={theme} switchTheme={switchTheme}/>

              </div>
          </header>

        <main className={"container"}>


        </main>

      </div>
  )
}
