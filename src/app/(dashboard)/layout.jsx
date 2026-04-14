import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex gap-2 justify-between'>
            <div className='h-screen w-[250px] bg-purple-200 text-purple-500 flex flex-col items-center justify-center font-bold text-5xl '>
                Sidebar
                <Link href={'/'}><button className='btn btn-primary flex gap-1'>Home <BsArrowRight/></button></Link>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;