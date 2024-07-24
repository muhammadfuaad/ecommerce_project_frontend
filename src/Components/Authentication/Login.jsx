import { Button, Checkbox, Form, Input, notification } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios.post('http://127.0.0.1:8000/api/login', values)
      .then(response => {
        console.log('response:', response);

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
    <div className='bg-gray-300 p-12 rounded-xl w-1/2 flex flex-col justify-center items-center m-auto'>
      <h2 className='font-bold text-2xl mb-16'>Login</h2>
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

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <span className="text-sm text-black">Not registered yet? <a className='cursor-pointer' onClick={() => navigate("/register")}>Register Now</a></span>
    </div>
  );
};

export default Login;