import { useParams } from 'react-router-dom';

const Category = () => {
  const { name } = useParams();

  // Fetch the items for this category from your API or state
  const items = [
    { id: 1, name: `${name} Item 1` },
    { id: 2, name: `${name} Item 2` },
    { id: 3, name: `${name} Item 3` }
  ];

  return (
    <div>
      <h1>{name} Category</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;