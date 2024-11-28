import React from 'react'

function Portfolio() {
    return (
        <div className='mt-[40px] bg-slat-600'>
            <div className=' space-y-[72px] md:space-y-[88px] xl:space-y-[80px]'>
                <div className='md:flex md:gap-[70px] xl:gap-[125px] items-center  '>
                    <div className='flex-1 max-w-[540px] md:w-1/2 ml-auto  '>
                        <picture>

                            <img className='mx-auto mb-[32px] md:mb-0 w-full h-auto object-contain ' src='./images/portfolio/desktop/entertainment-final.png' alt='portfolio project gist'></img>
                        </picture>
                    </div>
                    <div className=' xl: py-[24px] md:pt-[32px] md:pb-[50px] xl:py-[103px] border-[#979797] border-opacity-15 border-t-2 border-b-2   pr-[10px] flex-1 max-w-50ch md:w-1/2 md:text-left text-center '>
                        <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking[-0.36px]'>Entertainment</h1>
                        <p className='font-publicSans font-normal text-[16px] leading-[30px] mt-[24px]  xl:mt-[28px] md:mt-[28px] '>This project required me to build a reactive entertainment web application and get it looking as close to the design as possible.
                            I used react router along with useContext in React to manage multi page and transfer state to deep nested components.
                        </p>
                        <button className=' w-[175px] h-[48px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D mt-[24px] md:mt-[35px] xl:mt-[24px]'>VIEW PROJECT</button>

                    </div>

                </div>

                <div className='md:flex  md:flex-row-reverse md:gap-[70px] xl:gap-[125px]  items-center  '>
                    <div className='flex-1 max-w-[540px] md:w-1/2 mr-auto  '>
                        <picture>

                            <img className='mx-auto mb-[32px] md:mb-0 w-full h-auto object-contain ' src='./images/portfolio/desktop/cart.png' alt='cart app'></img>
                        </picture>
                    </div>
                    <div className=' xl: py-[24px] md:pt-[32px] md:pb-[50px] xl:py-[103px] border-[#979797] border-opacity-15 border-t-2 border-b-2   pr-[10px] flex-1 max-w-50ch md:w-1/2 md:text-left text-center '>
                        <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking[-0.36px]'>Cart</h1>
                        <p className='font-publicSans font-normal text-[16px] leading-[30px] mt-[24px]  xl:mt-[28px] md:mt-[28px] '>This project required me to build a product list page that includes a functional cart in which the user should be able add or reemove items in the cart.
                            I used React along with Tailwind CSS for Interactivity and  I used local storage to hold cart data.
                        </p>
                        <button className=' w-[175px] h-[48px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D mt-[24px] md:mt-[35px] xl:mt-[24px]'>VIEW PROJECT</button>

                    </div>

                </div>

                <div className='md:flex md:gap-[70px] xl:gap-[125px]  items-center  '>
                    <div className='flex-1 max-w-[540px] md:w-1/2 ml-auto  '>
                        <picture>

                            <img className='mx-auto mb-[32px] md:mb-0 w-full h-auto object-contain ' src='./images/portfolio/desktop/elearning.png' alt='portfolio project gist'></img>
                        </picture>
                    </div>
                    <div className=' xl: py-[24px] md:pt-[32px] md:pb-[50px] xl:py-[103px] border-[#979797] border-opacity-15 border-t-2 border-b-2   pr-[10px] flex-1 max-w-50ch md:w-1/2 md:text-left text-center '>
                        <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking[-0.36px]'>E-Learning</h1>
                        <p className='font-publicSans font-normal text-[16px] leading-[30px] mt-[24px]  xl:mt-[28px] md:mt-[28px] '>This project required me to build a responsive landing page for Skilled e learning app.I used HTML5 along with CSS to set hover state for interactive elements.
                        </p>
                        <button className=' w-[175px] h-[48px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D mt-[24px] md:mt-[35px] xl:mt-[24px]'>VIEW PROJECT</button>

                    </div>

                </div>


            </div>
            <div className='mt-[115px]  flex flex-col  items-center text-center md:text-left md:items-center  md:flex-row  '>
                <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking-[-0.36px] mb-[40px] md:mb-0 '>Intersted in doing a project together?</h1>
                <hr className=' w-1/2 border-t md:border-[#979797] opacity-15 md:mx-[32px]'></hr>
                <button className='w-[162px] h-[48px] md:min-w-[162px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D] '>CONTACT ME</button>
            </div>
        </div>


    )
}

export default Portfolio