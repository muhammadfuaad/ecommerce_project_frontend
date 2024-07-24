import React from 'react'
import Cards from './Card'
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';

const Categories = () => {
  return (
    <div className='w-10/12 justify-center flex flex-col '>
      <h3>Shop by Categories</h3>
    <div className='flex gap-4 justify-center align-middle flex-wrap'>

         <Cards
        title="First One"
        description="www.instagram.com"
        imageUrl={img1}
        link="https://www.instagram.com"
      />
         <Cards
        title="Second One"
        description="www.instagram.com"
        imageUrl={img2}
        link="https://www.instagram.com"
      />
         <Cards
        title="Third one"
        description="www.instagram.com"
        imageUrl={img3}
        link="https://www.instagram.com"
      />
    </div>
    </div>
  )
}

export default Categories

