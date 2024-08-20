import React from 'react'
import "./home.css"
import studentDataBase from "../database/datastore";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";
const Studentpage = () => {
  return (
    <main>
    <h1 className="text-[40px] py-[20px] rounded-[30px]  mt-[15px] px-[200px] ro bg-black text-center  "><b>Welcome to our Award presentation </b></h1>
    <div className="parentdiv">
    {
      studentDataBase.map((student)=>(
       <div className="flex flex-col w-[400px] h-[550px] bg-stone-500 rounded-[10px] mt-[23px] gap-[15px] items-center">
     
        <Image src={student.Image} className="w-[200px] mt-[20px] rounded-[10px] h-[200px]" alt={student.Name}></Image>
         <h1 className="text-[20px]"><b>{student.Name}</b></h1>
         <p>Dept:  {student.Department}</p>
         <p>{student.Award}</p>
         <p className="w-[330px] h-[1]">{student.Qoutes}</p>
         {/* <a href="#" className="py-[20px] px-[36px] bg-[brown] rounded-[13px]">View info</a> */}
         <Link href={{pathname:"/details", query:{Name:student.Name}}}>
                  <button className="p-[5px] w-[165px] bg-blue-600 text-white 
                  hover:bg-blue-700 border-[2px] border-blue-300 
                  rounded-[10px] flex items-center gap-[10px] justify-center"><span>View more</span><span><FaArrowRight /></span></button>
                  </Link>
 
       </div>
      ))
    }
    </div>
     </main>
  )
}

export default Studentpage