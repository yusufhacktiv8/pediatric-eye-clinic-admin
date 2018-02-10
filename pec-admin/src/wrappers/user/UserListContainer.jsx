import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import UserList from '../../components/user/UserList';
import * as actions from '../../actions';

const confirm = Modal.confirm;

class UserListContainer extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (<UserList {...this.props} />);
  }
}

UserListContainer.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    users: state.userReducers.list.rows,
    count: state.userReducers.list.count,
    searchText: state.userReducers.search.searchText,
    pageSize: state.userReducers.search.pageSize,
    currentPage: state.userReducers.search.currentPage,
    loading: state.userReducers.search.loading,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchUsers: () => {
      dispatch({
        type: actions.user.list.fetch,
      });

      dispatch({
        type: actions.role.list.fetchAll,
      });
    },
    openAddWindow: () => (
      dispatch({
        type: actions.user.window.open,
      })
    ),
    openEditWindow: record => (
      dispatch({
        type: actions.user.form.load,
        payload: record,
      })
    ),
    searchTextChanged: value => (
      dispatch({
        type: actions.user.list.search.textChanged,
        payload: value,
      })
    ),
    pageChanged: currentPage => (
      dispatch({
        type: actions.user.list.pageChanged,
        payload: currentPage,
      })
    ),
    confirmDelete: record => (
      confirm({
        title: `Do you Want to delete user: ${record.name}`,
        content: 'This action cannot be undone',
        onOk() {
          dispatch({
            type: actions.user.remove,
            payload: record,
          });
        },
        onCancel() {
          console.log('Cancel');
        },
      })
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer);
