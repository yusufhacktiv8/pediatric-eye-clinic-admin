import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Input, Row, Col } from 'antd';
import constant from '../../constant';

const USERS_URL = `${constant.serverUrl}/users`;
const Column = Table.Column;

class UserList extends Component {
  state = {
    searchText: '',
    users: [],
    loading: false,
    count: 0,
    currentPage: 0,
    pageSize: 10,
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get(USERS_URL)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Row gutter={10}>
          <Col span={8}>
            <Input
              value={this.state.searchText}
              onChange={(e) => {
                this.setState({
                  searchText: e.target.value,
                });
              }}
              placeholder="Email"
            />
          </Col>
          <Col span={16}>
            <span>
              <Button
                shape="circle"
                icon="search"
                onClick={() => this.getUsers()}
                style={{ marginRight: 15 }}
              />
              <Button
                type="primary"
                shape="circle"
                icon="plus"
                onClick={() => console.log('plus')}
              />
            </span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              dataSource={this.state.users}
              style={{ marginTop: 20 }}
              rowKey="id"
              loading={this.state.loading}
              pagination={{
                total: this.state.count,
                current: this.state.currentPage,
                pageSize: this.state.pageSize,
              }}
              onChange={pagination => this.pageChanged(pagination.current)}
              size="small"
            >
              <Column
                title="Email"
                dataIndex="email"
                key="email"
              />
              <Column
                title="Name"
                dataIndex="name"
                key="name"
              />
              <Column
                title="Action"
                key="action"
                render={(text, record) => (
                  <span>
                    <Button
                      icon="edit"
                      onClick={() => this.openEditWindow(record)}
                      style={{ marginRight: 5 }}
                    />
                    <Button
                      type="danger"
                      icon="delete"
                      onClick={() => this.confirmDelete(record)}
                    />
                  </span>
                )}
              />
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserList;
