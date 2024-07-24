import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Cards = ({ title, description, imageUrl, link }) => {
  return (
    <Card
    hoverable
    style={{ 
      width: 240,
      height:400,
    }}
    cover={
      <img 
        alt={title} 
        src={imageUrl} 
        style={{ 
          width: '240px', 
          height: '300px', 
          objectFit: 'cover' 
        }} 
      />
    }
    onClick={() => window.open(link, '_blank')}
  >
    <Meta title={title} description={description} />
  </Card>
  );
}

export default Cards;

