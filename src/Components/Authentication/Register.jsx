import { Button, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/callAxios';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("values:", values);
    const {name, email, password} = values
    const chars = /[@*&^%$#|":;,.]/
    if (chars.test(name)) {
      notification.error({message: "Name shouldn't contain any character"})
    } else if (!email.includes("@")) {
      notification.error({message: "Please enter a valid email"})
    } else if (password.length < 8) {
      notification.error({message: "Password should be at least 8 characters long"})
    } else {
      (axiosInstance.post('/api/signup', values)
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
      }))
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-600'>
      <div className='bg-gray-300 p-12 rounded-xl w-1/3 flex flex-col justify-center items-center m-auto'>
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
        <span className="text-sm text-black">Already registered <a className='cursor-pointer text-blue-600 font-bold' onClick={() => navigate("/login")}>Login</a></span>
      </div>
    </div>
  );
};

export default Register;