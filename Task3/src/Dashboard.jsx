import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const Dashboard= () => {
  return (
  <div className='flex flex-col h-screen'>

   <Navbar/>

   <div className='flex flex-1'>
   <Sidebar/>

   <div className='flex-1 p-6 bg-gray-100 overflow-auto'>
    <h2 className='text-2xl font-semibold'>Welcome to Dashboard</h2>
    <div className='grid grid-cols-3 gap-6 mt-5'>
      <div className='shadow-lg text-center rounded-lg p-5 bg-white'>
        <h3 className='text-xl font-semibold'>Total Users</h3>
        <p className=' text-xl'>125</p>
      </div>
      <div className='shadow-lg text-center p-5 bg-white'>
        <h3 className='text-2xl font-semibold'>Revenue</h3>
        <p className='text-xl'>Rs.25,300</p>
      </div>

     <div className='shadow-lg text-center p-5 bg-white'>
      <h3 className='text-2xl font-semibold'>Active Orders</h3>
      <p className='text-xl'>80</p>
     </div>
    </div>
   </div>
   </div>
    
  
   <Footer/>
  
  
  </div>
  );
}
export default Dashboard;
