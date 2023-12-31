import React from 'react'

function Button({Text, icon, condition}) {
  return (
    <div>
        <div className={`text-white m-2 lg:m-4 flex flex-row items-center justify-center border border-Ared rounded-full capitalize w-40 lg:w-64 h-8 lg:h-14 ${condition ? 'hover:bg-red-600 cursor-pointer' : '' }`}>
            <p className='lg:text-4xl text-2xl lg:mr-4 mr-2 items-center'>{ icon }</p>
            <div className='flex flex-col items-center justify-center text-center'>
                {/* <span className='text-center items-center mt-3 justify-center hidden lg:block'>{ subText }</span> */}
                <p className='lg:text-2xl font-Acme text-1xl'>
                  {
                    condition ? (
                      <a  
                href={"https://play.google.com/store/apps/details?id=com.curious5.schovela"}>{ Text }</a>
                    ) : (
                      <span>{Text}</span>
                    )
                  }
                </p>
            </div>
        </div>

    </div>
  )
}

export default Button
