import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Footer, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Workspace extends Component {
  state = {
    selectedKeys: ['dashboard'],
  }

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Header style={{ backgroundColor: '#FFF', padding: 0 }}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={this.state.selectedKeys}
            mode="horizontal"
          >
            <Menu.Item key="dashboard">
              <Link
                to="/"
                onClick={() => {
                  this.setState({
                    selectedKeys: ['dashboard'],
                  });
                }}
              ><Icon type="pie-chart" />Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="patients">
              <Link
                to="/patients" onClick={() => {
                  console.log('patients...');
                  this.setState({
                    selectedKeys: ['patients'],
                  });
                }}
              ><Icon type="contacts" />Patient</Link>
            </Menu.Item>
            <Menu.Item key="medicalRecords">
              <Link to="/medicalrecords"><Icon type="profile" />Medical Records</Link>
            </Menu.Item>
            <SubMenu title={<span><Icon type="lock" />Security</span>}>
              <Menu.Item key="users">
                <Link
                  to="/users"
                  onClick={() => {
                    this.setState({
                      selectedKeys: ['users'],
                    });
                  }}
                ><Icon type="user" />User</Link>
              </Menu.Item>
              <Menu.Item key="roles">
                <Link to="/roles"><Icon type="idcard" />Roles</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Settings</span>}>
              <Menu.Item key="diseases">
                <Link to="/diseases"><Icon type="skin" />Diseases</Link>
              </Menu.Item>
              <Menu.Item key="occupations">
                <Link to="/occupations"><Icon type="woman" />Occupations</Link>
              </Menu.Item>
              <Menu.Item key="insurances">
                <Link to="/insurances"><Icon type="medicine-box" />Insurances</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Content style={{ backgroundColor: '#FFF' }}>
          {this.props.children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Workspace;
