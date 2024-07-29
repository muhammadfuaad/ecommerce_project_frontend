import { Link } from 'react-router-dom';
import './Category.css';

// Import images directly
import img1 from '../Images/bed room.jpg';
import img2 from '../Images/mattress.jpg';
import img3 from '../Images/out door.jpg';
import img4 from '../Images/Header.jpg';
import img5 from '../Images/living room.jpg';
import img6 from '../Images/kitchen1.jpeg';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/callAxios';

const Categories = () => {
  const [categories, setCategories] = useState([])
  // const img = (index) => `img${index}`
  // console.log('img(1):', img(1));
  // console.log('img1:', img1);
  const images = [img1, img2, img3, img4, img5, img6];

  // Modify the img function to return the correct image from the array
  const img = (index) => images[index];

  useEffect(()=>{
    axiosInstance.get('/category').then((response)=>{
      console.log('response:', response);
      const categoriesData = response.data.data.map((element, index)=>{
        return {...element, image: img(index)}
      })
      setCategories(categoriesData)

    }).catch((response)=>{
      console.log('response:', response);
    })
  }, [])

  return (
    <div className='w-full flex justify-center'>
    <div className="category-container">
      <h1 className='flex flex-start pl-4'>SHOP BY CATEGORY</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <Link to={`/category/${category.name}`} key={category.name} state = {{categoryId: category._id}}>
            <div className="category-item" style={{ backgroundImage: `url(${category.image})` }}>
              <div className="category-name">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
    

  );
}

export default Categories;