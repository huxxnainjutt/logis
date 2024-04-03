import React from 'react';
import Image from "next/image";
import { ProcessListedWrap, ProcessSection } from './Process.styles';
import EditIcon from '../../../../public/images/service/step-icon-01.svg';
import DollarIcon from '../../../../public/images/service/step-icon-02.svg';
import BusIcon from '../../../../public/images/service/step-icon-03.svg';


const ProcessData = [
    {
        title: 'Enter Product Details',
        subTitle: 'Step 1',
        icon: EditIcon,
        content: 'We build a long-term relationship with all our clients. Therefore, the quality of our products is the priority for us. Keeping high standards, we prove our intentions and deliver foremost solutions to assist our customers.'
    },
    {
        title: 'Pay Your Service Tag',
        subTitle: 'Step 2',
        icon: DollarIcon,
        content: 'We build a long-term relationship with all our clients. Therefore, the quality of our products is the priority for us. Keeping high standards, we prove our intentions and deliver foremost solutions to assist our customers.'
    },
    {
        title: 'Ready To Go Your Goods',
        subTitle: 'Step 3',
        icon: BusIcon,
        content: 'We build a long-term relationship with all our clients. Therefore, the quality of our products is the priority for us. Keeping high standards, we prove our intentions and deliver foremost solutions to assist our customers.'
    },
]

const Process = () => {
  return (
   <>
    <ProcessSection>
        <div className="container">
            <h5 className='sub-title'>WORK PROCESS</h5>
            <h2 className='title'>Easy 3 Working Step</h2>
            <ProcessListedWrap>
                {ProcessData.map((item, index) => (
                    <li key={index} className='item'>
                        <div className='icon-box'>
                            <Image src={item.icon} alt='icon' />
                        </div>
                        <span className='step'>
                            {item.subTitle}
                        </span>
                        <h4 className='title'>
                            {item.title}
                        </h4>
                        <p className='content'>
                            {item.content}
                        </p>
                    </li>
                ))}
            </ProcessListedWrap>
        </div>
    </ProcessSection>
   </>
  )
}

export default Process