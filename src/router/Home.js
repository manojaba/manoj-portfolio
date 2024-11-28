import React from 'react'

function Home() {
    return (
        <div >
            <div className='mt-[40px] md:mt-[47px] border border-red-500 md:relative '>
                <picture>
                    <source srcSet='./images/homepage/desktop/image-homepage-hero@2x.jpg' media="(min-width:1280px)"></source>
                    <source srcSet='./images/homepage/tablet/image-homepage-hero@2x.jpg' media="(min-width:768px)"></source>
                    <source srcSet='./images/homepage/mobile/image-homepage-hero.jpg' media="(max-width:768px)"></source>
                    <img className='mx-auto w-full' src='./images/homepage/mobile/image-homepage-hero.jpg' alt='homepage hero'></img>
                </picture>
                <div className='md:absolute md:left-0 md:bottom-0 md:bg-white md:w-3/4 xl:w-2/5 md:pt-[56px] md:pr-[56px]'>
                    <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking-[-0.36px] mt-[24px] mb-[32px] md:relative '>Hey,I'm Manoj Baskar and I love building beautiful websites</h1>

                    <div className='flex items-center w-[200px] h-[48px] bg-[#203A4C] md:mt-[48px] xl:mt-[56px]'>
                        <div className='w-[48px] flex justify-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fill-rule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4" /><path opacity=".5" d="M0 5l8 4 8-4" /><path opacity=".25" d="M0 1l8 4 8-4" /></g></svg>
                        </div>
                        <p className='font-publicSans font-normal text-[12px] text-white tracking-[2px] mx-auto'>ABOUT ME</p>
                    </div>
                </div>
            </div>
            <div className='mt-[96px] md:flex md:gap-[60px] xl:gap-[125px] bg-blue-200'>
                <picture>
                    <source srcSet='./images/homepage/desktop/profile-desktop.png' media="(min-width:1280px)" ></source>
                    <source srcSet='./images/homepage/tablet/profile-tablet.png' media="(min-width:768px)"></source>
                    <source srcSet='./images/homepage/mobile/profile-mobile.png' media='(max-width:768px)'></source>
                    <img className='mb-[32px] md:mb-0 ' src='./images/homepage/desktop/profile-desktop.png' alt='profile of the developer'></img>
                </picture>

                <div className='border-[#979797] border-opacity-15 border-t-2 border-b-2 pt-[32px] xl:pt-[50px] pb-[40px] xl:pb-[46px]  md:w-3/4 bg-green-100 '>
                    <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking[-0.36px]'>About Me</h1>
                    <p className='mt-[28px] mb-[24px] font-publicSans font-normal text-[16px] leading-[30px] '>I'm a budding front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML,using modern CSS practices and
                        writing clean JavaScript. When writing JavaScript code, I mostly use React,but I can adapt to whatever tools are required. I'm based in Milano,Italy,but I can work remotely and have experience in remote teams. When I'm
                        not coding,you'll find me reading books. I love reading books playing ping-pong and going out for a walk. I'd love you to check out my work.
                    </p>
                    <button className=' w-[202px] h-[48px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D]'>GO TO PORTFOLIO</button>

                </div>



            </div>
            <div className='mt-[115px] mb-[80px] flex flex-col  items-center text-center md:text-left md:items-center  md:flex-row bg-red-100 '>
                <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking-[-0.36px] mb-[40px] md:mb-0 '>Intersted in doing a project together?</h1>
                <hr className=' w-1/2 border-t md:border-[#979797] opacity-15 md:mx-[32px]'></hr>
                <button className='w-[162px] h-[48px] md:min-w-[162px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D] '>CONTACT ME</button>
            </div>




        </div >
    )
}

export default Home 