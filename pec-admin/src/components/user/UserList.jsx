import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

import UserWindow from './UserWindow';

const Column = Table.Column;

const UserList = ({
  users,
  count,
  pageSize,
  currentPage,
  fetchUsers,
  openAddWindow,
  openEditWindow,
  confirmDelete,
  searchText,
  searchTextChanged,
  pageChanged,
  loading,
}) => (
  <div style={{ paddingLeft: 10, paddingRight: 10 }}>
    <Row gutter={10}>
      <Col span={8}>
        <Input
          value={searchText}
          onChange={(e) => {
            searchTextChanged(e.target.value);
          }}
          placeholder="Username or Name"
        />
      </Col>
      <Col span={16}>
        <span>
          <Button
            shape="circle"
            icon="search"
            onClick={() => fetchUsers()}
            style={{ marginRight: 15 }}
          />
          <Button
            type="primary"
            shape="circle"
            icon="plus"
            onClick={() => openAddWindow()}
          />
        </span>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Table
          dataSource={users}
          style={{ marginTop: 20 }}
          rowKey="id"
          loading={loading}
          pagination={{
            total: count,
            current: currentPage,
            pageSize,
          }}
          onChange={pagination => pageChanged(pagination.current)}
          size="middle"
        >
          <Column
            title="Username"
            dataIndex="username"
            key="username"
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
                  onClick={() => openEditWindow(record)}
                  style={{ marginRight: 5 }}
                />
                <Button
                  type="danger"
                  icon="delete"
                  onClick={() => confirmDelete(record)}
                />
              </span>
            )}
          />
        </Table>
      </Col>
    </Row>

    <UserWindow />
  </div>
);

UserList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  openAddWindow: PropTypes.func.isRequired,
  openEditWindow: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  searchTextChanged: PropTypes.func.isRequired,
  pageChanged: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default UserList;
