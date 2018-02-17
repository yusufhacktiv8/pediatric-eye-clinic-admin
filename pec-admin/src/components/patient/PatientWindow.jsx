import React from 'react';
import { Modal, Form, Input, DatePicker, Tabs } from 'antd';
import moment from 'moment';
import OccupationSelect from '../occupation/OccupationSelect';

const TabPane = Tabs.TabPane;
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
      bodyStyle={{ paddingTop: 5 }}
    >
      <Form layout="vertical">
        <Tabs defaultActiveKey="1">
          <TabPane tab="General" key="1">
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
            <FormItem label="Date of Birth">
              {getFieldDecorator('dateOfBirth', {
                initialValue: moment(patient.dateOfBirth),
                rules: [
                  { required: true, message: 'Please input birth of date' },
                ],
              })(
                <DatePicker />,
              )}
            </FormItem>
            <FormItem label="Address">
              {getFieldDecorator('address', {
                initialValue: patient.address,
              })(
                <Input />,
              )}
            </FormItem>
          </TabPane>
          <TabPane tab="Parents" key="2">
            <FormItem label="Father Name">
              {getFieldDecorator('fatherName', {
                initialValue: patient.fatherName,
              })(
                <Input />,
              )}
            </FormItem>
            <FormItem label="Mother Name">
              {getFieldDecorator('motherName', {
                initialValue: patient.motherName,
              })(
                <Input />,
              )}
            </FormItem>
            <FormItem label="Father Occupation">
              {getFieldDecorator('fatherOccupation', {
                initialValue: patient.fatherOccupation && patient.fatherOccupation.id > 0 ? patient.fatherOccupation : { id: undefined },
              })(
                <OccupationSelect />,
              )}
            </FormItem>
          </TabPane>
        </Tabs>
      </Form>
    </Modal>
  );
};

export default Form.create()(PatientWindow);
