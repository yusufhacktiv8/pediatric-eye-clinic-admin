import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const MedicalRecordWindow = ({ visible, onCancel, onCreate, form, medicalRecord }) => {
  const { getFieldDecorator } = form;

  return (
    <Modal
      visible={visible}
      title="MedicalRecord"
      okText="Save"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="Code">
          {getFieldDecorator('code', {
            initialValue: medicalRecord.code,
            rules: [
              { required: true, message: 'Please input the code' },
            ],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem label="Name">
          {getFieldDecorator('name', {
            initialValue: medicalRecord.name,
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

export default Form.create()(MedicalRecordWindow);
