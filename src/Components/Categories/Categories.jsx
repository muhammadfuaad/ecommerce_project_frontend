import { Link } from 'react-router-dom';
import './Category.css';

// Import images directly
import img1 from '../Images/bed room.jpg';
import img2 from '../Images/mattress.jpg';
import img3 from '../Images/out door.jpg';
import img4 from '../Images/Header.jpg';
import img5 from '../Images/living room.jpg';
import img6 from '../Images/kitchen1.jpeg';

const categories = [
  { name: 'Bedroom', image: img1 },
  { name: 'Mattress', image: img2 },
  { name: 'Outdoor', image: img3 },
  { name: 'Sofa', image: img4 },
  { name: 'Living Room', image: img5 },
  { name: 'Kitchen', image: img6 }
];

const Categories = () => {
  return (
    <div className='w-full flex justify-center'>
    <div className="category-container">
      <h1 className='flex flex-start pl-4'>SHOP BY CATEGORY</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <Link to={`/category/${category.name.toLowerCase()}`} key={category.name}>
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