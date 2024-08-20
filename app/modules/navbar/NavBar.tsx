import React from 'react'
import "./NavBar.css"
import Link from 'next/link'
import { GoArrowDown } from "react-icons/go";
const NavBar = () => {
  return (
    <div className=" flex-col items-center justify-center " >
         <nav className='flex justify-between'>
            <Link href={"/"}>MY CODE</Link>
            <ul>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                <Link href={"/contact"}>Contact us</Link>
                </li>
                <li>
                <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li >
                <Link className='py-[60px] px-[50px]' href={"/more"}>More</Link>
                <div className="dropdown">
                <ul className='drop'>
                  <Link href={"/lynda"}> lynda</Link>
                  <Link href={"/linkedin"}>linkedin</Link>
                  <Link href={"/others"}> others</Link>
                  <Link href={"/philearn"}>philearn</Link>
                  <Link href={"/laracast"}> laracast</Link>
                  <Link href={"/plural"}>plural</Link>
                  <Link href={"/cbt"}> cbt nugets</Link>
                </ul>
                </div>
                </li>
                <li>
                <Link href={"/follow"}>Follow us</Link>
                </li>
            </ul>
         </nav>
         </div>
    
  )
}

export default NavBar