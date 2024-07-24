import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Cards = ({ title, description, imageUrl, link }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={imageUrl} />}
      onClick={() => window.open(link, '_blank')}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}

export default Cards;

