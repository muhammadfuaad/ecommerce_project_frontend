import { Button, Form, Input, notification } from 'antd';
// import axios from 'axios';
import { useNavigate } from 'react-router';
import axiosInstance from '../../utils/callAxios';

const CategoryForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    axiosInstance.post('/category', values)
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

  return (
    <div className='flex justify-center items-center h-screen bg-gray-600'>
      <div className='bg-gray-300 p-12 rounded-xl w-1/3 flex flex-col justify-center items-center m-auto'>
        <h2 className='font-bold text-2xl mb-16'>Add New Category</h2>
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
            rules={[{ required: true, message: 'Please input category name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input categiry description!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
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

export default CategoryForm;