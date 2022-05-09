import React from 'react'

const HeaderIcon = ({ Icon, active }) => {
    return (
        <div className={`click_scale cursor-pointer md:px-8 sm:h-12 md:hover:bg-gray-200 flex items-center rounded-xl group`}>
            <Icon className={`h-6 text-center mx-auto md:h-6 text-gray-500 group-hover:text-blue-500 ${active && "text-blue-500 "}`} />
        </div>
    )
}

export default HeaderIcon