import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './login.css';
const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          this
            .props
            .history
            .push('/');
          console.log('Received values of form: ', values);
        }
      });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="login-box">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: '请输入用户名'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "user" style = {
                {
                  color: 'rgba(0,0,0,.25)'
                }
              } />}
                placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入密码'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "lock" style = {
                {
                  color: 'rgba(0,0,0,.25)'
                }
              } />}
                type="password"
                placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const WrappedLoginForm = Form.create()(withRouter(LoginForm));

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-title">React 后台管理系统</div>
        <WrappedLoginForm/>
      </div>
    )
  }
}
export default Login;