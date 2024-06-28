import Head from "next/head";
import Link from "next/link";
import TechIntro from "./techpage/techIntro-section/techIntro";
import BgMusic from "@/components/bg-music/bgmusic"

export default function Tech() {
    return(
        <>
            <Head>
                <title>Technologies - Web &#38; Graphic Design Expertise | Warclouser</title>        
            </Head>
            <TechIntro/>
            <BgMusic/>

        </>
    )
}