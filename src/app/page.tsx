import React from 'react'

function Home() {
  return (
    <div className='center-screen h-screen'>
      <div className='text-center w-[650px]'>
        <div className='mb-12'>
          <h1 className='text-7xl font-semibold text-[var(--green-color)]'>Welcome To Elenic Shop</h1>
        </div>
        <div className='mb-12'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam velit accusamus, mollitia numquam in!</p>
        </div>
        <div className='center-screen gap-5 mb-12'>
          <button className='btn'>Go to Store</button>
          <button className='btn-outline'>Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home