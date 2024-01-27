import Image from 'next/image'
import { useEffect } from 'react';

export default function Gradient() {
    return (
        <>
            <div className=''>
                <div className='bg-gradient-to-l to-[#220E3E] from-[#121212] gradient w-[52rem] absolute mt-24 -ml-72  h-72 blur-3xl  rounded-full opacity-50 rotate-45'>

                </div>
                    <div className='bg-gradient-to-r to-[#220E3E] from-[#121212] gradient w-[72rem] absolute bottom-0 right-0 -mr-44    h-96 blur-3xl -mt-96 rounded-full opacity-50 -rotate-45'>

                    </div>
            </div>
        </>
    )
}
