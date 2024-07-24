import React from 'react'
import Cards from './Card'

const Categories = () => {
  return (
    <div className='flex gap-4'>

         <Cards
        title="First One"
        description="www.instagram.com"
        imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        link="https://www.instagram.com"
      />
         <Cards
        title="Second One"
        description="www.instagram.com"
        imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        link="https://www.instagram.com"
      />
         <Cards
        title="Third one"
        description="www.instagram.com"
        imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        link="https://www.instagram.com"
      />
    </div>
  )
}

export default Categories

