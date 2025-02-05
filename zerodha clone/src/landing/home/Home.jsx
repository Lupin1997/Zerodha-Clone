
import Hero from "./Hero.jsx"
import Awards from "./Awards.jsx"
import Education from "./Education"
import Status from "./Status"
import Pricing from "./Pricing"
import OpenAccount from "../../OpenAccount"

export default function Home() {
    return (
        <div className="home">
            <>
            
            <Hero />
            <Awards />
            <Status />
            <Pricing />
            <Education />
            <OpenAccount />
   
            </>

        </div>
    )

}