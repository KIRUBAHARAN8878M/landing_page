import React from 'react'

const Image = React.lazy(() => import('next/image'))

const Blog = () => {
  return (
    <>
        <div className='w-full h-screen mb-16'>
            <div className='w-full h-[88px] pt-24 pb-16 flex flex-col items-center justify-center'>
                <h4 className='text-[#003569] font-semibold text-[16px]'>OUR BLOG</h4>
                <h1 className='text-[#17414F] font-semibold text-[48px]'>Latest News</h1>
            </div>
            <div className='w-full h-[750px] flex justify-evenly text-white '>

                <div className='flex flex-col relative'>
                    <div className='realtive w-[350px] h-[502px] relative  rounded-2xl'>
                        <Image
                            alt = 'blogimages1' 
                            src={"/Assets/blog1-450x580.jpg.png"}
                            width={450}
                            height={580}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10 rounded-2xl'
                        />
                        <div className='mt-5 -ml-2 bg-[#003569] w-[114px] h-[36px] text-[16px] font-medium rounded-r-[30px] items-center flex justify-center'>20 APR</div>
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                    </div>

                    <div className='w-[350px] h-[235px] relative overflow-hidden rounded-2xl -mt-10'>
                        <Image
                            alt = 'blogimages2' 
                            src={"/Assets/blog2-450x580.jpg.png"}
                            width={450}
                            height={580}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10'
                        />
                        <div className='mt-5 -ml-3 bg-[#003569] w-[114px] h-[36px] text-[16px] font-medium rounded-r-[30px] items-center flex justify-center'>20 APR</div>
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                    </div>
                </div>

                <div className='flex flex-col justify-between relative'>
                    <div className='w-[350px] h-[235px] relative rounded-2xl overflow-hidden'>
                        <Image
                            alt = 'blogimages3' 
                            src={"/Assets/blog1-450x580.jpg.png"}
                            width={450}
                            height={580}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10 object-contain'
                        />
                        <div className='mt-5 -ml-3 bg-[#003569] w-[114px] h-[36px] text-[16px] font-medium rounded-r-[30px] items-center flex justify-center'>20 APR</div>
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                    </div>

                    <div className='realtive w-[350px] h-[502px] relative rounded-2xl'>
                        <Image
                            alt = 'blogimages4' 
                            src={"/Assets/blog2-450x580.jpg.png"}
                            width={450}
                            height={580}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10 rounded-2xl'
                        />
                      
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                    </div>
                </div>

                <div className='flex flex-col relative'>
                    <div className='realtive w-[350px] h-[502px] relative rounded-2xl'>
                        <Image
                            alt = 'blogimages5' 
                            src={"/Assets/blog1-450x580.jpg.png"}
                            width={450}
                            height={580}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10 rounded-2xl'
                        />
                        <div className='mt-5 -ml-3 bg-[#003569] w-[114px] h-[36px] text-[16px] font-medium rounded-r-[30px] items-center flex justify-center'>20 APR</div>
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                    </div>

                    <div className='w-[350px] h-[235px] relative overflow-hidden rounded-2xl -mt-10'>
                        <Image
                            alt = 'blogimages6' 
                            src={"/Assets/blog2-450x580.jpg.png"}
                            width={450}
                            height={580}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10 object-contain'
                        />
                        <div className='mt-5 -ml-3 bg-[#003569] w-[114px] h-[36px] text-[16px] font-medium rounded-r-[30px] items-center flex justify-center'>20 APR</div>
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                    </div>
                </div>

                <div className='flex flex-col justify-between relative'>
                    <div className='w-[350px] h-[235px] relative rounded-2xl overflow-hidden'>
                        <Image
                            alt = 'blogimages7' 
                            src={"/Assets/blog1-450x580.jpg.png"}
                            width={350}
                            height={235}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10 object-contain rounded-2xl'
                        />
                        <div className='mt-5 -ml-3 bg-[#003569] w-[114px] h-[36px] text-[16px] font-medium rounded-r-[30px] items-center flex justify-center'>20 APR</div>
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>The Covid-19 Epidemic In 2022 <br/> Is Back</div>
                    </div>

                    <div className='realtive w-[350px] h-[502px] relative rounded-2xl'>
                        <Image
                            alt = 'blogimages8' 
                            src={"/Assets/blog2-450x580.jpg.png"}
                            width={450}
                            height={580}
                            style={{
                                objectFit: 'cover'
                            }}
                            className='object-center absolute -z-10 rounded-2xl'
                        />
                        <div className='mt-5 -ml-3 bg-[#003569] w-[114px] h-[36px] text-[16px] font-medium rounded-r-[30px] items-center flex justify-center'>17 MAR</div>
                        <div className='z-10 font-bold text-[20px] flex items-center justify-center mt-5'>  Hac hendrerit mus nons semper <br/> suspendisse</div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Blog