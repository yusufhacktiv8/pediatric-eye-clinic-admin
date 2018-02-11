import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Workspace extends Component {
  state = {
    selectedKeys: ['dashboard'],
  }

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Header style={{ backgroundColor: '#FFF', padding: 0, lineHeight: 1, height: 90 }}>
          <div style={{ width: '100%', height: 35, padding: 15, paddingTop: 17 }}>
            <span style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', border: '1px dotted silver', borderRadius: 50, padding: 7 }}>
              <Icon type="smile-o" style={{ marginRight: 5, color: 'gray', fontSize: 17 }} />
              <span style={{ color: 'gray' }}>Pediatric</span>
              <span style={{ color: 'gray' }}> Eye</span>
              <span style={{ color: 'gray' }}> Clinic &trade;</span>
            </span>
          </div>
          <div>
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
                  <Link
                    to="/roles"
                    onClick={() => {
                      this.setState({
                        selectedKeys: ['roles'],
                      });
                    }}
                  ><Icon type="idcard" />Roles</Link>
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
          </div>
        </Header>
        <Content style={{ backgroundColor: '#FFF' }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default Workspace;
