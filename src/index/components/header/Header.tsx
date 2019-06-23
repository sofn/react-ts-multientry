import React, {Component} from "react";
import {Icon, Layout, Menu} from "antd";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import AppStore from "../stores/AppStore";
import {inject, observer} from "mobx-react";


const {Header} = Layout;
const {SubMenu} = Menu;

interface EmptyProps extends RouteComponentProps{

}

interface HeaderInjectedProps extends EmptyProps {
    location: any
    store: AppStore
}

@inject("store")
@observer
class HeaderComponent extends Component<EmptyProps, {}> {
    get injected() {
        return this.props as HeaderInjectedProps;
    }

    render() {
        const {store} = this.injected;

        let selectMenu = window.location.hash.split("/")[1]
            ? window.location.hash.split("/")[1]
            : "homePage";

        return (
            <Layout>
                <Header className="header" style={{height: "34px"}}>
                    <div className="logo"/>

                    <Menu theme="dark"
                          mode="horizontal"
                          defaultSelectedKeys={["homePage"]}
                          style={{lineHeight: "34px"}}
                          selectedKeys={[selectMenu]}>
                        <SubMenu title={
                            <span className="submenu-title-wrapper"><Icon type="database"/>下拉菜单</span>
                        }>
                            <Menu.Item className={"app-menu-item"}>
                                <Link to={"/aaa"}/>
                            </Menu.Item>
                            <Menu.Item className={"app-menu-item"}>
                                <Link to={"/bbb"}/>
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="user" style={{float: "right"}}>
                            {store.user ? store.user.name : ""}
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        );
    }
}


export default withRouter(HeaderComponent);
