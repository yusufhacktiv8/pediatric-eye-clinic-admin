import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';

import './App.css';

import Workspace from './components/workspace/Workspace';
import UserPage from './components/user/UserPage';
import RolePage from './components/role/RolePage';
import InsurancePage from './components/insurance/InsurancePage';
import OccupationPage from './components/occupation/OccupationPage';
import DiseasePage from './components/disease/DiseasePage';
import PatientPage from './components/patient/PatientPage';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <Workspace>
//             <Route exact path="/" component={UserPage} />
//             <Route exact path="/users" component={UserPage} />
//             <Route exact path="/roles" component={RolePage} />
//             <Route exact path="/insurances" component={InsurancePage} />
//           </Workspace>
//         </Router>
//       </div>
//     );
//   }
// }

export default () => (
  <div className="App">
    <Router>
      <Workspace>
        <Route exact path="/" component={UserPage} />
        <Route exact path="/users" component={UserPage} />
        <Route exact path="/roles" component={RolePage} />
        <Route exact path="/insurances" component={InsurancePage} />
        <Route exact path="/occupations" component={OccupationPage} />
        <Route exact path="/diseases" component={DiseasePage} />
        <Route exact path="/patients" component={PatientPage} />
      </Workspace>
    </Router>
  </div>
);
