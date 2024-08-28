import Link from "next/link";

export default function Header(){
    return(
        <div className=" w-full h-12 bg-blue-100 ">
            <div>
                <img className=" w-12 h-12 rounded-full ml-8 flex float-start" src="mine.jpg"/>
            </div>
           <div className=" flex flex-row gap-4 float-end mt-3 mr-10 text-lg"> 
            <Link href="/"><p className=" border-solid border-b-4 border-black">Home</p></Link>
            <Link href="/about"><p className="border-solid border-b-4 border-black">About</p></Link>
            <p className="border-solid border-b-4 border-black">Personal</p>
            <p className="border-solid border-b-4 border-black">Contact</p>
            </div>

            
        </div>
    )
}