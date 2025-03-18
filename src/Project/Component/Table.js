import React from 'react'

const Table = ({ItemDescription,Quantity,Price,Amount,Material,Size}) => {
  return (
    <>
    <table width="100%" >
     <tr className='bg-gray-200 '>
      <td className='font-bold'>Item description</td>
      <td className='font-bold'>Material</td>
      <td className='font-bold'>Size</td>
      <td className='font-bold'>Quantity</td>
      <td className='font-bold'>Price</td>
      <td className='font-bold'>Amount</td>
      
      </tr>
      {/* {Table Body} */}
      <tr>
        <td>{ItemDescription}</td>
        <td>{Material}</td>
        <td>{Size}</td>
        <td>{Quantity}</td>
        <td>{Price}</td>
        <td>{Price*Quantity}</td>
      </tr>
    </table>
    </>
  )
}

export default Table
