import Head from "next/head";
import WorkIntro from "./workpage/workIntro";
import Experience from "./homepage/experience/experience";
import BgMusic from "@/components/bg-music/bgmusic"

export default function Work() {
    return(
        <>
            <Head>
                <title>Work - Web &#38; Graphic Design Expertise | Warclouser</title>        
            </Head>
            <Experience/>
            <WorkIntro/>
            <BgMusic/>

        </>
    )
}