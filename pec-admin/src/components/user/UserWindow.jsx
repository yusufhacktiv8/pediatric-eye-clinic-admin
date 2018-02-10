import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/lib/modal';
import UserForm from './UserForm';

const UserWindow = ({
  visible,
  onOk,
  onCancel,
  confirmLoading,
  ...otherProps
}) => (
  <Modal
    title="Add User"
    visible={visible}
    okText="Save"
    onOk={onOk}
    confirmLoading={confirmLoading}
    onCancel={onCancel}
  >
    <UserForm {...otherProps} />
  </Modal>
);

UserWindow.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  confirmLoading: PropTypes.bool.isRequired,
};

export default UserWindow;
