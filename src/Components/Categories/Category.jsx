import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/callAxios';

const Category = () => {
  const { categoryName } = useParams();

  // Fetch the items for this category from your API or state
  // const items = [
  //   { id: 1, name: `${name} Item 1` },
  //   { id: 2, name: `${name} Item 2` },
  //   { id: 3, name: `${name} Item 3` }
  // ];
  const decodedCategoryName = decodeURIComponent(categoryName);
  console.log('decodedCategoryName:', decodedCategoryName);

  useEffect(()=>{
    axiosInstance.get(`/product/${decodedCategoryName}`).then((response)=>{
      console.log('response:', response);
    })
  }, [decodedCategoryName])

  return (
    <div>
      <h1>{categoryName} Category</h1>
      {/* <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Category;