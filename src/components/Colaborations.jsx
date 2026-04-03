import React from 'react'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3.png'
import company4 from '../assets/company4.png'
import company5 from '../assets/company5.png'

function Colaborations() {
  return (
    <div className='bg-primary3 my-[20px]'>
        <div className='max-w-7xl mx-auto px-[10px] flex justify-center md:justify-between flex-wrap gap-[24px] py-[40px]'>
            <img src={company1} alt="company1" />
            <img src={company2} alt="company2" />
            <img src={company3} alt="company3" />
            <img src={company4} alt="company4" />
            <img src={company5} alt="company5" />
        </div>
    </div>
  )
}

export default Colaborations