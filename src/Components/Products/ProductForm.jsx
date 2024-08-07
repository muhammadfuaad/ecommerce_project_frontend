import { Button, Form, Input, notification, Space, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import axios from 'axios';
import { useNavigate } from 'react-router';
import axiosInstance from '../../utils/callAxios';
import { useEffect, useState } from 'react';

const ProductForm = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState("")
  const [selectedCategory, setSelectedCategory] = useState({})

  useEffect(()=>{
    axiosInstance.get('/category')
    .then(response => {
      console.log('response:', response);
      setCategories(response.data.data)
    })
    .catch(error => {
      console.error('error', error);
    });
  }, [])
  

  useEffect(()=>{
    console.log('categories:', categories);
  }, [categories])
  

  const onFinish = (values) => {
    axiosInstance.post('/product', {...values, category: selectedCategoryId})
      .then(response => {
        // console.log('response:', response);
        navigate('/')
        notification.success({
          message: response.data.message,
          description: `Welcome back`,
        });
      })
      .catch(error => {
        console.error('error', error);

        notification.error({
          message: error.data.message,
          description: 'Please check your credentials and try again.',
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleMenuClick = (e) => {
    console.log('click', e);
    const index = e.key - 1
    console.log('index:', index);
    const category = categories[index]
    setSelectedCategory(category)
    console.log('selectedCategory:', selectedCategory);
    const id = selectedCategory._id
    setSelectedCategoryId(id)
    console.log('selectedCategoryId:', selectedCategoryId);
  };

  const items = categories.map((category, index)=>{
    return {
      label: category.name,
      key: (index+1)
    }
  })
  console.log('items:', items);
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  console.log('selectedCategory:', selectedCategory);
  

  return (
    <div className='flex justify-center items-center h-screen bg-gray-600'>
      <div className='bg-gray-300 p-12 rounded-xl w-1/3 flex flex-col justify-center items-center m-auto'>
        <h2 className='font-bold text-2xl mb-16'>Add New Product</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Please input product price!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input product description!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Stock"
            name="stock"
            rules={[{ required: true, message: 'Please input product description!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            // rules={[{ required: true, message: 'Please input product category!' }]}
          >
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  {selectedCategory == {} ? "Select Category" : selectedCategory.name}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            
          </Form.Item>
          
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;