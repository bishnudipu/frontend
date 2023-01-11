import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import topbar from '../../Assets/topbar.png'
import calender from  '../../Assets/calender.png'

const Vendortop = () => {
  return (
    <div className= 'w-[92%] mx-auto' >
      <div className='flex justify-between border-b-2 h-[50px] items-center' >
        <div  className=' flex ' >
            <img src = {topbar}  alt= 'header' height='10px' width='20px' />
          <div> MRO Electronic Distributors</div>  
        </div>
        <div  className='flex justify-center items-center ' >
           <div> Welcome Barun</div>
           <AccountCircleIcon/>
        </div>
      </div>
      <div  className='flex justify-between mt-[12px] ' >
        <div>Order Status</div>
       <div   className='bg-slate-200  p-2 rounded-[5px] flex' >
       <div  className='mr-[30px]' >19-Dec-2022</div>
       <img src = {calender} height='15px' width='20px' />
       </div>
      </div>
    </div>
  )
}

export default Vendortop
