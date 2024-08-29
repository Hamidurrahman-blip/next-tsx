import Link from "next/link";
import Header from "./about/Header";
import About from "./about/page";
import clsx from "clsx";
import { inter, matemasie } from "./cs/Font";
export default function Home({status}:{status: string}){
    return(
        <div>
            
        <Header/>
            <h1 className={`${matemasie.className} text-7xl`}>welcome home!</h1>

<Link href="/about">cAbout(dropdown)</Link>
<Link href="/about">cAbout (button)</Link>

<div
  className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
/>
<p className={`${inter.className} text-slate-500 `}>Hello this my next js practice module</p>
</div>

    ) 
}