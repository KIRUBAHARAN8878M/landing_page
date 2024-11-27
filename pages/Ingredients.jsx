import React from 'react'

const Image = React.lazy(() => import('next/image'))

export const Ingredients = () => {
  return (
    <>
        <div className='relative w-full mt-[120px] flex flex-wrap pl-4 pr-4 items-center justify-evenly'>
            <div className='w-[612px] h-[267px]'>
                <h4 className='font-semibold text-[16px] text-[#003569] uppercase'>INgredients</h4>
                <h1 className='font-semibold text-[48px] text-[#17414F] ml-1 mb-5'>Better Ingredients</h1>
                <p className='font-normal text-[14px] text-[#727272]'>Only the best when you choose products offered on our platform - high-quality<br></br> ingredients for high quality products! </p>
            </div>

            <div className='w-[411px] h-[267px] relative -ml-16'>
                <Image className='absolute -z-10' src={"/Assets/h2-b1.jpg.png"} width={500} height={500} alt ="h2-b1"/>
                <div className='z-20 flex flex-col pt-8 pl-10'>
                    <h1 className='text-[26px] font-semibold text-[#2D3F59]'>Vitamin C</h1>
                    <h2 className='text-[20px] font-medium text-[#727272]'>Vitamin C as ascorbic acid</h2>
                    <div className='mt-24'>
                        <input className='text-[#003569] text-[16px] font-semibold' type="submit" value={"SEE MORE"}/>
                        <div className='w-20 h-[1px] bg-[#003569]'></div>
                    </div>
                </div>
            </div>
            

            <div className='w-[411px] h-[267px] relative'>
                <Image className='absolute -z-10' src={"/Assets/bn2-2.jpg.png"} width={500} height={500} alt ="bn2-2"/>
                <div className='z-20 flex flex-col pt-8 pl-6'>
                    <h1 className='text-[26px] font-semibold text-[#2D3F59]'>Vitamin B3</h1>
                    <h2 className='text-[20px] font-medium text-[#727272]'>Niacin for healthy gut and skin</h2>
                    <div className='mt-24'>
                        <input className='text-[#003569] text-[16px] font-semibold' type="submit" value={"SEE MORE"}/>
                        <div className='w-20 h-[1px] bg-[#003569]'></div>
                    </div>
                </div>
            </div> 

            <div className='w-[411px] h-[267px] relative mt-7'>
                <Image className='absolute -z-10' src={"/Assets/bn2-3.jpg.png"} width={500} height={500} alt ="bn2-3"/>
                <div className='z-20 flex flex-col pt-8 pl-6'>
                    <h1 className='text-[26px] font-semibold text-[#2D3F59]'>Magnesium</h1>
                    <h2 className='text-[20px] font-medium text-[#727272]'>Boost energy and support <br/> muscle function</h2>
                    <div className='mt-24'>
                        <input className='text-[#003569] text-[16px] font-semibold' type="submit" value={"SEE MORE"}/>
                        <div className='w-20 h-[1px] bg-[#003569]'></div>
                    </div>
                </div>
            </div>  

            <div className='w-[411px] h-[267px] relative mt-7'>
                <Image className='absolute -z-10' src={"/Assets/bn2-4.jpg.png"} width={500} height={500} alt ="bn2-4"/>
                <div className='z-20 flex flex-col pt-8 pl-6'>
                    <h1 className='text-[26px] font-semibold text-[#2D3F59]'>Hyaluronic Acid</h1>
                    <h2 className='text-[20px] font-medium text-[#727272]'>For smooth, <br/> supple and soft skin!</h2>
                    <div className='mt-24'>
                        <input className='text-[#003569] text-[16px] font-semibold' type="submit" value={"SEE MORE"}/>
                        <div className='w-20 h-[1px] bg-[#003569]'></div>
                    </div>
                </div>
            </div> 

            <div className='w-[411px] h-[267px] relative mt-7'>
                <Image className='absolute -z-10' src={"/Assets/bn2-5.jpg.png"} width={500} height={500} alt ="bn2-5"/>
                <div className='z-20 flex flex-col pt-8 pl-6'>
                    <h1 className='text-[26px] font-semibold text-[#2D3F59]'>Lactobacillus</h1>
                    <h2 className='text-[20px] font-medium text-[#727272]'>Invigorate your gut <br/> microbiome</h2>
                    <div className='mt-24'>
                        <input className='text-[#003569] text-[16px] font-semibold' type="submit" value={"SEE MORE"}/>
                        <div className='w-20 h-[1px] bg-[#003569]'></div>
                    </div>
                </div>
            </div>        
            
            <div className='w-[117px] h-[250px] mt-7'>
                <Image src={"/Assets/ingredientshape.png"} width={500} height={500} className='object-cover' alt ="ingredientshape"/>
            </div>
        </div>
    </>
  )
}

export default Ingredients
