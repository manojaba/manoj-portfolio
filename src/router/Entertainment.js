import React from 'react'

function Entertainment() {
    return (
        <div>
            <div>
                <img
                    className="mb-[40px]"
                    src="./images/detail/entertainment/projects template (1).png"
                    alt="tablet layout for entertainment app"
                />
                <div className="border-[#979797] border-opacity-15 border-t-2 border-b-2 p-[25px]  bg-blue-200 flex flex-col flex-wrap md:flex-row w-full">


                    <div className="bg-red-100">
                        <div className="md:clearfix">
                            {/* Heading */}
                            <h1 className="font-ibarra font-bold text-[40px] leading-[42px] tracking-[-0.36px] float-left w-full md:w-1/2 bg-yellow-200">
                                Entertainment
                            </h1>

                            {/* Paragraph */}
                            <div className="bg-green-100 float-left w-full md:w-1/2">
                                <p className="font-publicSans font-normal text-[16px] leading-[30px] mt-[24px] md:mt-0">
                                    This project required me to build a reactive entertainment web
                                    application and get it looking as close to the design as possible. I
                                    used React Router along with useContext in React to manage multi-page
                                    and transfer state to deep-nested components.
                                </p>
                            </div>

                            {/* Details Section */}
                            <div className="mt-[24px] float-left w-full md:w-1/2 md:clear-left bg-blue-100">
                                <p className="font-publicSans font-bold text-[13px] leading-[30px] text-[#5FB4A2]">
                                    Interaction Design/Front End Development
                                </p>
                                <p className="font-publicSans font-bold text-[13px] leading-[30px] text-[#5FB4A2]">
                                    TAILWIND CSS/ REACT
                                </p>
                                <button className="w-[175px] h-[48px] border border-[#33323D] font-publicSans font-normal text-[12px] tracking-[2px] text-[#33323D] mt-[24px]">
                                    VIEW WEBSITE
                                </button>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>


    )
}

export default Entertainment