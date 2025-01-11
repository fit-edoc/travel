
import img from '../assets/logo.webp'
import ert from '../assets/ertica.png'
import swft from '../assets/swift.png'
import et from '../assets/etios.png'
import gop from '../assets/ji.jpg'
import { CiMenuFries } from "react-icons/ci";
import gsap from 'gsap'
import './Nav.css'
import { useGSAP } from '@gsap/react'

function Nav() {

const animate = ()=>{

    useGSAP(()=>{

        gsap.to(".strip h1",{
            left:"11%",
            duration:2.5,
            ease: "power1.out",
        })
        gsap.to(".strip2 img ",{
            right:"40%",
            duration:2.5,
ease: "power1.out",
        })
        gsap.to("#swift ",{
            left:"10%",
            duration:2.5,
ease: "power1.out",
        })
        gsap.to("#et ",{
            left:"70%",
            duration:2.5,
ease: "power1.out",
        })

        setTimeout(()=>{
            gsap.to(".strip h1 span",{
                color:"#6799df"
            })
        },3000)
        setTimeout(()=>{
            gsap.to("#span2",{
                color:"orange"
            })
        },3000)
    })
    
}
   animate()

   


  return (
    <>
    <div className='nav'>
        <div className="left"><img src={img} alt="" /></div>
        <div className="right">
            <a href="">Contact us </a><a href="">book a trip</a><a href="">about </a>
        <CiMenuFries id='menu'/>
        </div>
      
    </div>
    <div className="show">
        <div className="strip"><h1><span>Don</span> Tour and <span id='span2'>Travels</span></h1></div>
        <div className="strip2"><img src={ert} alt=""  id='op'/>
        <img src={swft} alt="" id='swift' />
        <img src={et} alt="" id='et' /></div>
        <div className="strip3" ><div className="up">
        
        <div className="down"><a href="tel:793793"><button id='but'>call now </button></a>
        <a href="tel:793793"><button id='but'>enquiry</button></a></div>
        </div>
       </div>
        <div className="showcase">
           
            <img src={gop} alt="" />
        </div>
    </div>
    </>
  )
}

export default Nav
