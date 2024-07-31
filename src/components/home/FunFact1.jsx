import React from 'react'
import { funFact1 } from '../../data/fun-fact-data'

const FunFact1 = () => {
  return (
   <section className='w-full h-full pt-2 sm:pt-10 pb-6 bg-white  relative b '>

     {/* ----------- container ---------------- */}

     <div className='xlg:w-8/12  xmd:w-11/12 smd:w-10/12 w-11/12 mx-auto flex sm:flex-row flex-col items-center  sm:items-start gap-y-12 sm:justify-between '>

     {
        funFact1.map((data) => (
            <div key={data.id} className='flex sm:flex-row flex-col items-center '>

                <div className='xmd:w-[110px] sm:w-[80px] w-[128px] xmd:h-[128px] sm:h-[100px] h-[100px]  rounded-lg  '>
                    <img src={data.image} alt={data.text} className='w-full h-full object-cover '/>

                </div>
                <div className='flex flex-col gap-y-2 sm:gap-y-0 items-center sm:items-start'>
                    <p className='xl:text-4xl xmd:text-3xl sm:text-2xl xs:text-3xl text-2xl font-bold text-text-bright-grey font-poppins'>{data.count}
                      {
                        data.id === 1 ? "+" : ""
                      }

                    </p>
                    <p className='xl:text-lg smd:text-[16px] sm:text-sm xs:text-[16px] text-sm text-text-mid-grey font-nunito-sans'>{data.text}</p>

                </div>
                
            </div>
        ))

     }


     </div>


   </section>
  )
}

export default FunFact1