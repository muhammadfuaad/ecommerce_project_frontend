import { Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("values:", values);
    
    (axios.post('http://127.0.0.1:8000/api/signup', values)
      .then(response => {
        console.log('response:', response);
        navigate('/login')
        notification.success({
          message: response.data.message,
        });
      })
      .catch(error => {
        console.log('error:', error);
        notification.error({
          message: error.data.message,
          description: 'Please try again.',
        });
      })
    )
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='bg-gray-300 p-12 rounded-xl w-1/2 flex flex-col justify-center items-center m-auto'>
      <h2 className='font-bold text-2xl mb-16'>Register</h2>
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
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <span className="text-sm text-black">Already registered <a className='cursor-pointer' onClick={() => navigate("/login")}>Login</a></span>
    </div>
  );
};

export default Register;