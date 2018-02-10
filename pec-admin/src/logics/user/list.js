import { createLogic } from 'redux-logic';
import axios from 'axios';
import notification from 'antd/lib/notification';
import constant from '../../constant';
import random from '../../utils/random';
import * as actions from '../../actions';

const USERS_URL = `${constant.serverUrl}/api/users`;

console.log(actions.user.list.fetch);

const fetchLogic = createLogic({
  type: actions.user.list.fetch,
  cancelType: actions.user.list.cancelFetch,
  latest: true,
  process({ getState, action }, dispatch, done) {
    axios.get(USERS_URL, { params: { r: random() } })
      .then(resp => resp.data)
      .then(ysc => dispatch({ type: actions.user.list.load, payload: ysc }))
      .catch((err) => {
        console.error(err);
        notification.error({
          message: 'Fetch user error',
          description: 'Connection error.',
        });
      })
      .then(() => done());
  },
});

export default [
  fetchLogic,
];
