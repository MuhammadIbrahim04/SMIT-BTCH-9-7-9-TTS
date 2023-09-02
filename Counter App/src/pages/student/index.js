import React, { useState } from 'react';
import { Button, Checkbox, Table, Form, Input } from 'antd'; 



const onFinish = (values) => {
  console.log('Success:', values);
  const [student,setStudent]= useState()
  const stu=student
  stu.push(values)
  setStudent([...stu])
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Class"
      name="class"
      rules={[
        {
          required: true,
          message: 'Please input your Class!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label="Age"
      name="age"
      rules={[
        {
          required: true,
          message: 'Please input your Age!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

);
export default App;




const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
];

<Table dataSource={dataSource} columns={columns} />;