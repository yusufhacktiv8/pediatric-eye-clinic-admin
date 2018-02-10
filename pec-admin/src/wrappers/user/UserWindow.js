import { connect } from 'react-redux';
import UserWindow from '../../components/user/UserWindow';
import * as actions from '../../actions';

const mapStateToProps = state => (
  {
    visible: state.userReducers.widow.visible,
    confirmLoading: state.userReducers.window.confirmLoading,
    form: state.userReducers.form,
  }
);

const mapDispatchToProps = dispatch => (
  {
    formChanged: (payload) => {
      dispatch({
        type: actions.user.form.changed,
        payload,
      });
    },
    onCancel: () => {
      dispatch({
        type: actions.user.window.close,
      });
    },
    onOk: () => {
      dispatch({
        type: actions.user.save,
      });
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserWindow);
