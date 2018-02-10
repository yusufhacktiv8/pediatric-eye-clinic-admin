import React from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';

import RoleSelect from '../role/RoleSelect';

const FormItem = Form.Item;

const UserForm = ({ form, formChanged }) => (
  <Form>
    <Row>
      <Col span={24}>
        <FormItem
          label="Username"
          colon={false}
          validateStatus={form.username.validateStatus}
          help={form.username.errorMsg}
        >
          <Input
            value={form.username.value}
            onChange={(e) => {
              formChanged({
                key: 'username',
                value: e.target.value,
              });
            }}
            placeholder="Username"
            maxLength={30}
          />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <FormItem
          label="Name"
          colon={false}
          validateStatus={form.name.validateStatus}
          help={form.name.errorMsg}
        >
          <Input
            value={form.name.value}
            onChange={(e) => {
              formChanged({
                key: 'name',
                value: e.target.value,
              });
            }}
            placeholder="Name"
            maxLength={50}
          />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <FormItem
          label="Role"
          colon={false}
          validateStatus={form.role.validateStatus}
          help={form.role.errorMsg}
        >
          <RoleSelect
            value={form.role.value}
            onSelect={(value) => {
              formChanged({
                key: 'role',
                value,
              });
            }}
          />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <FormItem
          label="Email"
          colon={false}
          validateStatus={form.email.validateStatus}
          help={form.email.errorMsg}
        >
          <Input
            value={form.email.value}
            onChange={(e) => {
              formChanged({
                key: 'email',
                value: e.target.value,
              });
            }}
            placeholder="Email"
            maxLength={70}
          />
        </FormItem>
      </Col>
    </Row>
  </Form>
);

UserForm.propTypes = {
  formChanged: PropTypes.func.isRequired,
  form: PropTypes.shape({
    username: PropTypes.shape.isRequired,
    name: PropTypes.shape.isRequired,
  }).isRequired,
};

export default UserForm;
