import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';

export default function Project() {
    return (
        <>
            <div className='mt-32'>
                <h1 className='text-4xl text-center font-semibold'>Projects</h1>

                <div className='grid gap-5 md:grid-cols-2 grid-cols-1   lg:grid-cols-3 mt-16'>
                    <Link href='#'>
                        <div style={{ backgroundImage: `url(/proje.png)` }} className=' h-44 background border hover:border-white border-[#202020]'>
                            <div className='h-full text-end flex justify-end p-4 w-full bg-gradient-to-l from-black/70 from-60% via-transparent to-transparent'>
                                <div className='h-full grid content-between '>
                                    <div>
                                        <h1 className='font-semibold text-xl'>Personel Website</h1>
                                        <h4 className='max-w-[15rem] text-sm'>Şuanda görmekte olduğunuz websitesi.</h4>
                                    </div>
                                    <div className='flex justify-end gap-3'>
                                        <div className='border border-[#202020] py-1 px-2'>
                                            <h1>React</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href='#'>
                        <div style={{ backgroundImage: `url(/proje.png)` }} className=' h-44 background border hover:border-white border-[#202020]'>
                            <div className='h-full text-end flex justify-end p-4 w-full bg-gradient-to-l from-black/70 from-60% via-transparent to-transparent'>
                                <div className='h-full grid content-between '>
                                    <div>
                                        <h1 className='font-semibold text-xl'>Personel Website</h1>
                                        <h4 className='max-w-[15rem] text-sm'>Şuanda görmekte olduğunuz websitesi.</h4>
                                    </div>
                                    <div className='flex justify-end gap-3'>
                                        <div className='border border-[#202020] py-1 px-2'>
                                            <h1>React</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href='#'>
                        <div style={{ backgroundImage: `url(/proje.png)` }} className=' h-44 background border hover:border-white border-[#202020]'>
                            <div className='h-full text-end flex justify-end p-4 w-full bg-gradient-to-l from-black/70 from-60% via-transparent to-transparent'>
                                <div className='h-full grid content-between '>
                                    <div>
                                        <h1 className='font-semibold text-xl'>Personel Website</h1>
                                        <h4 className='max-w-[15rem] text-sm'>Şuanda görmekte olduğunuz websitesi.</h4>
                                    </div>
                                    <div className='flex justify-end gap-3'>
                                        <div className='border border-[#202020] py-1 px-2'>
                                            <h1>React</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    

                </div>
            </div>
        </>
    )
}
