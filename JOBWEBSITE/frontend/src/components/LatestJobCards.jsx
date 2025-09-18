import React from 'react';
import { Badge } from "@/components/ui/badge";
const LatestJobCards=()=>{
    return(
        <div className='p-5 rounded-d shadow-xl bg-white border-gray-700 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Fuck Fuck Fuck Go find a Job You pisky Brat Do some Work</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 positions</Badge>
                <Badge className={'text-red-700 font-bold'} variant="ghost">Part time</Badge>
                <Badge className={'text-purple-700 font-bold'} variant="ghost">12 Lpa</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards