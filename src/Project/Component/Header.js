import React from 'react'

const Header = () => {
    const HandlePrint = () => {
        window.print()
    }

    return (
        <>
            <header className='flex flex-col items-center justify-center mb-5'>
                <div>
                    <h1 className='font-bold uppercase text-4xl mb-3'>Invoice</h1>
                </div>
                <div>
                    <ul className='flex items-center justify-end flex-wrap gap-3'>
                        <li><button onClick={HandlePrint} className='bg-yellow-300 p-2 rounded'>print</button></li>
                    </ul>
                </div>
            </header>

        </>
    )
}

export default Header
