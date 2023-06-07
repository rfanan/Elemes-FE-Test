

import React from 'react'

export const Button = (props) => {

    const { className = 'bg-primary_green text-netral_white', children, text, type = 'submit' } = props

    return (
        <button type={type} {...props} className={`${className} [&>svg]:w-7 [&>svg]:h-7 flex items-center gap-x-3 font-medium py-3 px-4 rounded-full`}>
            {text || children}
        </button>
    )
}
