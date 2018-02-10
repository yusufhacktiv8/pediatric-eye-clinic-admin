import { connect } from 'react-redux';
import RoleSelect from '../../components/role/RoleSelect';

const mapStateToProps = state => (
  {
    roles: state.userReducers.roles,
  }
);

export default connect(
  mapStateToProps,
  null,
)(RoleSelect);
