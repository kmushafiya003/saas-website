import React from 'react'
import DynamicButton2 from '../common/DynamicButton2'
import CardScreen from '../../images/Card screens.svg'
import dynamite from '../../images/dynamite.svg'
import dots from '../../images/dots -image.svg'
import RespCard from '../../images/responsive-card-screen.svg'
import RespRound from '../../images/resp-round.svg'
import RespDots from '../../images/resp-dots.svg'
import RespRect from '../../images/resp-rect.svg'



const HeroSection1 = () => {

    return (
        <section className='w-full h-full pt-4 bg-white  relative '>

            {/* ---------------- container -------------- */}
            <div className='xlg:w-10/12 xmd:w-11/12 sm:w-9/12 xxs:w-10/12 w-11/12  xlg:ml-auto ml-auto mr-auto xlg:mr-0 flex xmd:flex-row flex-col gap-y-8 items-center justify-between lg:justify-start relative xlg:h-[680px] xs:pt-20 pt-6 xs:pb-10 pb-16'>

                {/* ----------- Content ------------ */}

                <div className=" flex flex-col xmd:items-start xs:items-center lg:w-[47%] xmd:w-[43%]  justify-center lg:gap-y-8 xmd:gap-y-5 gap-y-8 ">

                    {/* ------------ heading--------- */}
                    <h2 className=' xs:text-center xmd:text-left capitalize xl:text-5xl lg:text-[40px] xmd:text-4xl xs:text-5xl text-[32px] font-bold xl:leading-[64px] xmd:leading-[54px] xs:leading-[64px] leading-[46px] text-text-bright-grey font-poppins xs:w-full w-[90%] '>
                        Committed to People Committed to <span className='text-primary-crocus-purple'>the Future</span>
                    </h2>

                    {/* ------------ description ------- */}


                    <p className='xl:w-[80%] w-[90%] text-lg leading-8 font-normal font-nunito-sans text-text-purple-haze xs:text-center xmd:text-left'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at </p>


                        {/* --------- button --------------- */}
                    <DynamicButton2 text="Get Started Now"/>

                </div>


                {/* ---------- Card Screen ---------- */}

                <div className=' relative lg:w-[53%] xmd:w-[48%] xs:h-full xl:left-[-40px] xs:lg:left-[-30px] xmd:left-[-5px]   lg:scale-110 xmd:scale-125 h-[200px]'>

                    <img src={CardScreen} alt="card screen" className='xs:flex hidden w-full h-full' />

                         {/* --------- resp card screen image ----------- */}
                    <img src={RespCard} alt="card-screen" className='xs:hidden relative xxs:top-[-150px] top-[-130px] z-10' />

                    {/* ----------- resp  reactangle image ------------ */}
                    
                    <img src={RespRect} alt="rectangle" className='xs:hidden absolute w-[150px] z-1 xxs:bottom-0 bottom-[20px]  right-[-40px]' />

                    {/* ----------- resp dot image ------------ */}
                    
                    <img src={RespDots} alt="rectangle" className='xs:hidden absolute  z-1 xxs:bottom-[40px] bottom-[50px] right-[120px]' />

                     


                </div>

                {/* -------------- dynamite image ------------- */}

                <img src={dynamite} alt="dynamite" className=' xlg:flex hidden absolute xl:left-[-120px] left-[-100px]  xlg:top-[60px]   xlg:w-[150px] xlg:h-[150px] '/>

                {/* ----------------- resp round image  ------------- */}

                <img src={RespRound} alt="rectangle" className='xs:hidden absolute  z-1 top-[50px] xxs:right-[-30px] right-0 w-[50px]' />


            </div>

            {/* -------------- dots (side images ) --------------------- */}

            <img src={dots} alt="dots" className='absolute left-0 bottom-0 xlg:w-[110px] w-[80px] xmd:flex hidden' />

           

        </section>
    )
}

export default HeroSection1