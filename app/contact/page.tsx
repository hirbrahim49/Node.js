import React from 'react'
import "./contact.css"
const  ContactPage = () => {
  return (
    <>
    <div className='condiv'>
      <div className="conleft">
        <h1 className='border-2 border-solid border-black  mt-6'>  </h1>
        <h1 className='py-[20px]'>CONTACT US</h1>
        <h1 className='border-[1px] border-solid border-grey '>  </h1>
          <form action="#" method="POST"  className=" mt-[30px]"id="contact-form">
                <label htmlFor="name" className="block mb-[5px] "><b>Name</b>(required)</label>
                <input type="text" id="name" name="Fullname"  required className="w-[400px]  h-[40px] p-[10px] 
                mb-[10px] border-[1px] border-solid border-grey rounded-[3px] " />
                <label htmlFor="email" className="block mb-[5px]"><b>Email</b>(required)</label>
                <input type="email" id="email" name="email" required className="w-[400px] h-[40px] 
                p-[10px] mb-[10px] border-[1px] border-solid border-grey rounded-[3px]"/>
                 <label htmlFor="email" className="block mb-[5px]"><b>Subject</b>(required)</label>
                <input type="email" id="email" name="email" required className="w-[400px]  
                p-[10px] mb-[10px] border-[1px] border-solid border-grey rounded-[3px]"/>
                <label htmlFor="message" className="block mb-[5px]"><b>Message</b></label>
                <textarea name="message" id="message"className="w-[100%]  p-[10px] mb-[10px] 
                border-[1px] border-solid border-grey rounded-[3px] h-[400px]"></textarea>
            
            <button type="submit" className="w-[100px] p-[10px] bg-red-600 border-none rounded-[3px] font-bold hover:bg-green-200">send</button>
            </form>

      </div>
      <div className="contright">
         <h1 className='py-[40px]' >SEARCH FOR YOUR FAVOURITE COURSE</h1>
         <form action="#" className='flex'>
                <textarea name="search" placeholder='search...'  id="search"className="w-[270px] border-[1px] border-solid border-grey h-[35px]  "></textarea>
            
            <button type="submit" className="w-[100px] h-[35px]  bg-red-600 text-white border-none rounded-[3px]  hover:bg-green-200">SEARCH</button>
            </form>
            <h1 className='mt-[60px]'>SUBCRIBE TO BLOG VIA EMAIL </h1>

            <p  className='text-[12px] text-grey mt-[20px]'> Enter your email adress to get all of our premier lynda,pluralsight,laracast and many more courses directed into your email  </p>
            <form className=' flex flex-col gap-[15px] mt-[30px]' action="#">
            <textarea name="email" placeholder='Email adress'  id="email" className="w-[270px] border-[1px] border-solid border-grey h-[35px]  "></textarea>
            
            <button type="submit" className="w-[130px] h-[40px] rounded-[20px] bg-gray-600 text-black border-none rounded-[3px]  hover:bg-green-200">SUBSCRIBE</button>
            </form>
           
            <p className='text-[11px] text-grey mt-[20px]'> join other subscriber</p>
            <h1 className='border-2 border-solid border-black  mt-6'>  </h1>
            <p className='text-[20px] text-grey mt-[20px]'> TAG CLOUD</p>
            <div className='flex flex-wrap text-center gap-[10px]' >
            <p className='border-solid border-gray border-[2px] w-[60px]' > html</p>
            <p className='border-solid border-gray border-[2px] w-[50px]' > css</p>
            <p className='border-solid border-gray border-[2px] w-[85px]' > javascript </p>
            <p className='border-solid border-gray border-[2px] w-[85px]' > textscript</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > node</p>
            <p className='border-solid border-gray border-[2px] w-[75px]' > react</p>
            <p className='border-solid border-gray border-[2px] w-[95px]' > technology</p>
            <p className='border-solid border-gray border-[2px] w-[75px]' > ROUTER</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > AL</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > PI</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > chatgpt</p>
            <p className='border-solid border-gray border-[2px] w-[95px]' > security</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > scratch</p>
            <p className='border-solid border-gray border-[2px] w-[91px]' > default</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > technical</p>
            <p className='border-solid border-gray border-[2px] w-[70px]' > small</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > amateaur</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > pro</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > html</p>
            <p className='border-solid border-gray border-[2px] w-[50px]' > css</p>
            <p className='border-solid border-gray border-[2px] w-[85px]' > javascript </p>
            <p className='border-solid border-gray border-[2px] w-[85px]' > textscript</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > node</p>
            <p className='border-solid border-gray border-[2px] w-[75px]' > react</p>
            <p className='border-solid border-gray border-[2px] w-[95px]' > technology</p>
            <p className='border-solid border-gray border-[2px] w-[75px]' > ROUTER</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > AL</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > PI</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > chatgpt</p>
            <p className='border-solid border-gray border-[2px] w-[95px]' > security</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > scratch</p>
            <p className='border-solid border-gray border-[2px] w-[91px]' > default</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > technical</p>
            <p className='border-solid border-gray border-[2px] w-[70px]' > small</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > amateaur</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > pro</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > html</p>
            <p className='border-solid border-gray border-[2px] w-[50px]' > css</p>
            <p className='border-solid border-gray border-[2px] w-[85px]' > javascript </p>
            <p className='border-solid border-gray border-[2px] w-[85px]' > textscript</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > node</p>
            <p className='border-solid border-gray border-[2px] w-[75px]' > react</p>
            <p className='border-solid border-gray border-[2px] w-[95px]' > technology</p>
            <p className='border-solid border-gray border-[2px] w-[75px]' > ROUTER</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > AL</p>
            <p className='border-solid border-gray border-[2px] w-[60px]' > PI</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > chatgpt</p>
            <p className='border-solid border-gray border-[2px] w-[95px]' > security</p>
            <p className='border-solid border-gray border-[2px] w-[90px]' > scratch</p>
            <p className='border-solid border-gray border-[2px] w-[91px]' > default</p>
            </div>
      </div>
    </div>
    <div> 
    <h1 className='border-2 border-solid border-gray  mt-6'> </h1>
    <p className='text-[10px] text-grey ml-[20px] mb-[20px] mt-[20px]'>@2024-course club.all right reserved </p>

    </div>
    </>
  )
}

export default ContactPage