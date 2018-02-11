import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import constant from '../../constant';

const USERS_URL = `${constant.serverUrl}/users`;

const columns = [{
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
  render: text => <a href="/#">{text}</a>,
}];

const getUsers = () => (
  new Promise((resolve, reject) => {
    axios.get(USERS_URL)
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  })
);

class UserList extends Component {
  state = {
    searchText: '',
    users: [],
  }
  componentDidMount() {
    getUsers()
      .then((response) => {
        this.setState({
          users: response.data,
        });
      });
  }

  render() {
    return (
      <Table columns={columns} dataSource={this.state.users} />
    );
  }
}

export default UserList;
