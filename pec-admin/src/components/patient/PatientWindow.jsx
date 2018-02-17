import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const PatientWindow = ({ visible, onCancel, onCreate, form, patient }) => {
  const { getFieldDecorator } = form;

  return (
    <Modal
      visible={visible}
      title="Patient"
      okText="Save"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="Code">
          {getFieldDecorator('code', {
            initialValue: patient.code,
            rules: [
              { required: true, message: 'Please input the code' },
            ],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem label="Name">
          {getFieldDecorator('name', {
            initialValue: patient.name,
            rules: [
              { required: true, message: 'Please input the name' },
            ],
          })(
            <Input />,
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(PatientWindow);
