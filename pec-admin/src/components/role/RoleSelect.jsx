import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

const RoleSelect = ({ roles, value, onSelect }) => (
  <Select
    placeholder="Select Role"
    style={{ width: 120 }}
    onSelect={onSelect}
    value={value}
  >
    {roles.map(role => (
      <Option value={role.id}>{role.name}</Option>
    ))}
  </Select>
);

RoleSelect.propTypes = {
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RoleSelect;
