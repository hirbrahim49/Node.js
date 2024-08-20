import React from 'react'
import { findByName } from '../component/helper'
import { Student } from '@/app/database/datastore'
import Image from 'next/image'
type Props = {
    searchParams: Student 
}


const EachStudentDetails = ({searchParams}:Props) => {
    const myStudentName = searchParams.Name;
    console.log(myStudentName)
    const myRealName = findByName (myStudentName);

  return (
    <>
    <div className="bg-gradient-to-b from-blue-400 to-pink-300 h-[300px] text-[white] flex flex-col justify-center">
      <p  className='text-4xl mx-[50px] md:text-5xl font-bold '>{myRealName?.Department}</p>
      <p className='font-bold my-[10px] text-[30px] mx-[50px]'>{myRealName?.Faculty}</p>
    </div>
   <main className='bg-white h-[400px] flex  '>
   <div className='  w-[500px] flex items-center justify-center'>
   <Image className="  h-[250px] w-[250px] rounded-[50%]" src={myRealName?.Image} alt={myRealName?.Name}></Image>
    </div>
    <div> 
    <h2 className="text-4xl my-[20px] mx-[90px] text-center font-semibold"><b>{myRealName?.Name}</b></h2>
    <p className='text-[25px] text-[gre]'> <b>Faculty:</b>{myRealName?.Faculty}</p>
    <p><b>Dep:</b>{myRealName?.Department}</p>
    <p> <b> Award:</b>{myRealName?.Award}</p>
    <p><b>Other Award:</b>{myRealName?.OtherAward}</p>
    
    </div>
   </main>
    </>
  )
}

export default EachStudentDetails 