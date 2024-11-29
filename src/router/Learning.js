import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Learning() {
    return (
        <div>
            <div>
                <img
                    className="mb-[40px]"
                    src="./images/detail/elearning/projects template.png"
                    alt="tablet layout for learning app"
                />
                <div className='xl:flex xl:gap-[125px] w-full '>
                    <div className='xl:flex xl:gap-[125px]  xl:w-1/3   '>
                        <div className="border-[#979797] border-opacity-15 border-t-2 border-b-2   ">


                            <div className=" md:flex  xl:w-full mt-[25px] mb-[25px] xl:sticky xl:top-10 ">
                                <div className="md:w-1/2 xl:w-full ">
                                    {/* Heading */}
                                    <h1 className="font-ibarra font-bold text-[40px] leading-[42px] tracking-[-0.36px]  w-full md:w-1/ xl:w-full ">
                                        Learning
                                    </h1>



                                    <p className="font-publicSans font-normal text-[16px] leading-[30px] mt-[24px] md:mt-0 md:hidden xl:block">
                                        This project required me to build a reactive entertainment web
                                        application and get it looking as close to the design as possible. I
                                        used React Router along with useContext in React to manage multi-page
                                        and transfer state to deep-nested components.
                                    </p>


                                    {/* Details Section */}
                                    <div className="mt-[24px]  w-full   ">
                                        <p className="font-publicSans font-bold text-[13px] leading-[30px] text-[#5FB4A2] w-full">
                                            Interaction Design/Front End Development
                                        </p>
                                        <p className="font-publicSans font-bold text-[13px] leading-[30px] text-[#5FB4A2]">
                                            TAILWIND CSS/ REACT
                                        </p>
                                        <a href='https://manojaba.github.io/skilled-elearning-landing-page/' target='blank'>
                                            <button className="w-[175px] h-[48px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D] mt-[24px]">
                                                VIEW WEBSITE
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <p className="font-publicSans font-normal text-[16px] leading-[30px] mt-[24px] md:mt-0 md:w-1/2  xl:hidden w-full ">
                                    This project required me to build a reactive entertainment web
                                    application and get it looking as close to the design as possible. I
                                    used React Router along with useContext in React to manage multi-page
                                    and transfer state to deep-nested components.
                                </p>


                            </div>
                        </div>

                    </div>
                    <div className='xl:w-2/3 '>
                        <h1 className='font-ibarra font-normal text-[32px] leading-[42px] tracking-[-0.29px] mt-[48px] xl:mt-0'>Project Background</h1>
                        <p className='font-publicSans font-normal text-[16px] leading-[30px] mt-[28px] mb-[42px]'>
                            This project was a front-end  challenge from Frontend Mentor. This entertainment web application challenge involves replicating a design with precision while showcasing interactive functionality. Users can navigate between Home, Movies, TV Series, and Bookmarked Shows, search for content, and manage bookmarks. The app dynamically populates data from a local data.json file and adapts to various screen sizes with optimal layouts. Interactive elements include hover states, enhancing user experience.
                        </p>
                        <h1 className='font-ibarra font-normal text-[32px] leading-[42px] tracking-[-0.29px] mb-[40px]'>Static Previews</h1>
                        <img className='mb-[32px]' src='./images/detail/elearning/desktop.png'></img>
                        <img className='mb-[64px] md:mb-[80px] xl:mb-[64px]' src='./images/detail/elearning/mobile.png'></img>
                    </div>
                </div>
                <div className='  border-[#979797] border-opacity-15 border-t-2 border-b-2 flex justify-between '>
                    <div className='flex items-center space-x-[25px] py-[33px] w-1/2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" /></svg>

                        <NavLink to='/cart'>
                            <div>
                                <h1 className='font-ibarra font-normal text-[32px] leading-[36px] tracking-[-0.29px]'>Cart</h1>
                                <p className='font-publicSans font-normal text-[16px] leading-[30px]'>Previous Project</p>
                            </div>
                        </NavLink>

                    </div>
                    <div className='border-l-2 border-[#979797] border-opacity-15 '></div>
                    <div className='flex items-center justify-end space-x-[25px] py-[33px]   w-1/2 '>

                        <NavLink to='/entertainment'>
                            <div>
                                <h1 className='font-ibarra font-normal text-[32px] leading-[36px] tracking-[-0.29px]'>Entertainment</h1>
                                <p className='font-publicSans font-normal text-[16px] leading-[30px]'>Next Project</p>

                            </div>

                        </NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" /></svg>

                    </div>
                </div>

                <div className='mt-[115px]  flex flex-col  items-center text-center md:text-left md:items-center  md:flex-row mb-[80px] xl:mb-0 md:mb-[60px] '>
                    <h1 className='font-ibarra font-bold text-[40px] leading-[42px] tracking-[-0.36px] mb-[40px] md:mb-0 '>Intersted in doing a project together?</h1>
                    <hr className=' w-1/2 border-t md:border-[#979797] opacity-15 md:mx-[32px]'></hr>
                    <button className='w-[162px] h-[48px] md:min-w-[162px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D] '>CONTACT ME</button>
                </div>
            </div>
        </div>


    )
}

