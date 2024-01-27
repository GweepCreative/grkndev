import Image from 'next/image'
import { useEffect } from 'react';

export default function EduEx() {
    return (
        <>
            <div className='grid mt-12 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='flex  justify-center h-96'>
                    <div>
                        <h1 className='text-4xl text-center font-semibold'>Education</h1>
                        <div className='flex flex-col gap-y-7 mt-10'>
                            <div >
                                <h1 className='text-lg text-gray-100 font-semibold'>Özel Antakya Teknokent Koleji Lisesi</h1>
                                <h4 className='text-gray-400 text-sm'>High School</h4>
                            </div>
                            <div >
                                <h1 className='text-lg text-gray-100 font-semibold'>Özel Antakya Teknokent Koleji Lisesi</h1>
                                <h4 className='text-gray-400 text-sm'>High School</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  justify-center h-96'>
                    <div>
                        <h1 className='text-4xl text-center font-semibold'>Experience</h1>
                        <div className='flex flex-col gap-y-7 mt-10'>
                            <div >
                                <h1 className='text-lg text-gray-100 font-semibold'>T.C Tarım ve Orman Bakanlığı Bilgi İşlem Dairesi</h1>
                                <h4 className='text-gray-400 text-sm'>High School</h4>
                            </div>
                            <div >
                                <h1 className='text-lg text-gray-100 font-semibold'>Özel Antakya Teknokent Koleji Lisesi</h1>
                                <h4 className='text-gray-400 text-sm'>ARGL Member</h4>
                            </div>
                            <div >
                                <h1 className='text-lg text-gray-100 font-semibold'>Discord INC.</h1>
                                <h4 className='text-gray-400 text-sm'>ARGL Member</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
