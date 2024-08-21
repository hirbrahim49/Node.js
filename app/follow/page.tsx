import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdNoteAlt } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineSkype } from "react-icons/ai";
import Link from 'next/link'
const page = () => {
  return (
    <div className='flex flex-col justify-center gap-[50px] bg-stone-300 '>
    <h1 className='text-[60px] text-center mt-[70px]'><b>Contact Buffalo</b></h1>
    <p className=' text-center text-grey'>Get in touch with us to get the ball rolling</p>
    <section className='flex  justify-center gap-[30px] flex-wrap my-[70px]' >
      <div className='flex flex-col h-[250px] w-[200px] bg-[#f5f5dc] rounded-[20px] gap-[15px] justify-center items-center'>
        <p className='text-[40px] py-[25px] px-[25px] bg-stone-300 rounded-[50%]'><IoLogoWhatsapp /></p>
        <p> whatsapp</p>
        <a className='py-[20px] px-[30px] bg-[gray] rounded-[15px]' href="https://Wa.me/+2349044174371">click here</a>
      </div>
      <div className='flex flex-col h-[250px] w-[200px] bg-[#f5f5dc] rounded-[20px] gap-[15px] justify-center items-center'>
        <p className='text-[40px] py-[25px] px-[25px] bg-stone-300 rounded-[50%]' ><MdOutlinePhoneIphone /></p>
        <p> PHONE</p>
        <p>+2349044174371</p>
      </div>
      <div className='flex flex-col h-[250px] w-[200px] bg-[#f5f5dc] rounded-[20px] gap-[15px] justify-center items-center'>
        
        <p className='text-[40px] py-[25px] px-[25px] bg-stone-300 rounded-[50%]'> <MdNoteAlt /></p>
        <p>MESSAGE</p>
        <p>+2349135843102</p>
      </div>
      <div className='flex flex-col h-[250px] w-[200px] bg-[#f5f5dc] rounded-[20px] gap-[15px] justify-center items-center'>
        {/* <Link href={}></Link> */}
        <p className='text-[40px] py-[25px] px-[25px] bg-stone-300 rounded-[50%]'> <CiTwitter /></p>
        <p>TWITTER</p>
        <a className='py-[20px] px-[30px] bg-[gray] rounded-[15px]' href="https://x.com/OdeyemiIbrahim?s=08">click here</a>

      </div>
      <div className='flex flex-col h-[250px] w-[200px] bg-[#f5f5dc] gap-[15px] rounded-[20px] justify-center items-center'>
        {/* <Link href={}></Link> */}
        <p className='text-[40px] py-[25px] px-[25px] bg-stone-300 rounded-[50%]'><AiOutlineSkype /></p>
        <p>SKYPE</p>
        <a className='py-[20px] px-[30px] bg-[gray] rounded-[15px]' href="https://x.com/OdeyemiIbrahim?s=08">click here</a>
      </div>

    </section>
    </div>
    
  )
}

export default page