import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto', marginBottom: 30 }}>
          <span style={{ fontSize: 14, fontWeight: 'bold', color: '#5093E1', border: '1px dotted silver', borderRadius: 50, padding: 7 }}>
            <Icon type="smile-o" style={{ marginRight: 5, color: '#5093E1', fontSize: 17 }} />
            <span style={{ color: '#5093E1' }}>Pediatric</span>
            <span style={{ color: '#5093E1' }}> Eye</span>
            <span style={{ color: '#5093E1' }}> Clinic &trade;</span>
          </span>
        </div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
        <div style={{ color: 'silver', fontSize: 12 }}>
          Pediatric Eye Clinic Rumah Sakit Universitas Hasanuddin. © RS UNHAS 2018. All rights reserved.
        </div>
      </Form>
    );
  }
}

export default Form.create()(NormalLoginForm);
