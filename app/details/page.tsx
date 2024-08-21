import React from 'react'
import { findByName } from '../component/helper'
import { Student } from '@/app/database/datastore'
import Image from 'next/image'
import { Container } from 'postcss'
type Props = {
    searchParams: Student 
}


const EachStudentDetails = ({searchParams}:Props) => {
    const myStudentName = searchParams.Name;
    console.log(myStudentName)
    const myRealName = findByName (myStudentName);

  return (
    <div className='bg-white flex justify-center'>  
 <main className='w-[1000px] my-[50px] flex shadow-md rounded-lg p-6 bg-white flex-col gap-[60px] h-[630px]'>
    <section className='mt-[2px] ml-[2px] flex gap-[7px]'>
    <div className='w-[15px] h-[15px] bg-[red] rounded-[50%]'></div>
      <div className='w-[15px] h-[15px] bg-[yellow] rounded-[50%]'></div>
      <div className='w-[15px] h-[15px] bg-[green] rounded-[50%]'></div>
    </section>
    <section className='ml-[55px]'>
     <h1 className='text-[28px]'><b>Portfolio</b></h1>
     <div className='flex flex-col gap-[50px]'>
      <section className=' flex justify-between mt-[25px] mx-[15px]'>
        <li className='list-none py-[5px] px-[15px] border-[0.2px] border-[gainsboro] text-[gainsboro] border-[solid] rounded-[7px]'>Math</li>
        <li className='list-none py-[5px] px-[15px] border-[0.2px] border-[gainsboro] text-[gainsboro] border-[solid] rounded-[7px]'>English</li>
        <li className='list-none py-[5px] px-[15px] border-[0.2px] border-[gainsboro] text-[gainsboro] border-[solid] rounded-[7px]'> Elective1 </li>
        <li className='list-none py-[5px] px-[15px] border-[0.2px] border-[gainsboro] text-[gainsboro] border-[solid] rounded-[7px]'> Elective2</li>
      </section>
      <section className='flex'>
        <div className='w-[410px]'>
          <h1 className='text-[20px]'> <b>Hey there!🙋‍♂️🙋</b></h1>
          <h1 className=' mt-[10px]text-[20px]'> <b>I'm {myRealName?.Name}</b></h1>
          <h2 className=' mt-[10px] text-[grey]'> {myRealName?.email}</h2>
          <h1 className='mt-[15px] text-[bold] text-[17px]'><b>Founder</b></h1>
          <div className='flex gap-[10px]'>
            <div className='w-[2px] bg-black h-[93px]'></div>
          <p className='w-[300px] '>{myRealName?.Qoutes} </p>
          </div>
          <p className='mt-[10px]'> {myRealName?.Award} </p>
          <div className='flex flex-col mt-[20px]  gap-[10px] ' >
            <div className='w-[400px] text-[grey] rounded-[2px] h-[25px] bg-[gainsboro]' >Bihance</div>
          <div className='w-[400px] text-[grey]  rounded-[2px] h-[25px] bg-[gainsboro]' >Linkin</div>
            <div className='w-[400px] text-[grey]   rounded-[2px] h-[25px] bg-[gainsboro]'>Dribble</div>
          </div>
        </div>
        <div className='flex justify-center'>
          <Image className='w-[350px] ml-[20px] h-[350px] rounded-[50%]' src={myRealName?.Image} alt={myRealName?.Name}></Image>
        </div>
      </section>
     </div>
    </section>
</main>


    </div>
  )
}

export default EachStudentDetails 