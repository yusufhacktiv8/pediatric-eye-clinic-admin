import React from 'react';
import { Modal, Form, Input } from 'antd';
import PatientSelect from '../patient/PatientSelect';

const FormItem = Form.Item;

const checkPatient = (rule, value, callback) => {
  if (value.id > 0) {
    callback();
    return;
  }
  callback('Please input the patient');
};

const MedicalRecordWindow = ({ visible, onCancel, onCreate, form, medicalRecord }) => {
  const { getFieldDecorator } = form;
  const patient = medicalRecord.patient && medicalRecord.patient.id > 0 ?
    medicalRecord.patient : { id: undefined };
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
        <FormItem label="Patient">
          {getFieldDecorator('patient', {
            initialValue: patient,
            rules: [
              { validator: checkPatient },
            ],
          })(
            <PatientSelect />,
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(MedicalRecordWindow);
