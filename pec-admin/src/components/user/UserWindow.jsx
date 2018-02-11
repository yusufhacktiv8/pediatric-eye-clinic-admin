import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const UserWindow = ({ visible, onCancel, onCreate, form }) => {
  const { getFieldDecorator } = form;

  return (
    <Modal
      visible={visible}
      title="Create a new user"
      okText="Create"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="Username">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input the username' }],
          })(
            <Input />,
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(UserWindow);
