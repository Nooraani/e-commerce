import React from 'react'

const Footer = ({name,address,Email,Phone,Amount,Quantity}) => {
    return (
        <>
            <footer>
                <ul className='flex flex-wrap items-center justify-between'>
                    <li>Your Name :  {name}   </li>
                    <li>Your Email : {Email}   </li>
                    <li>Address : {address}   </li>
                    <li>Your Phone no :{Phone}  </li>
                    <li>Total Amount :{Amount*Quantity}</li>

                </ul>
            </footer>
        </>
    )
}

export default Footer
