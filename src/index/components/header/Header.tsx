import React, {Component} from "react";
import {Icon, Layout, Menu} from "antd";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import AppStore from "../stores/AppStore";
import {inject, observer} from "mobx-react";


const {Header} = Layout;
const {SubMenu} = Menu;

interface EmptyProps extends RouteComponentProps {

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
            : "aaa";

        return (
            <Layout>
                <Header className="header" style={{height: "34px"}}>
                    <div className="logo"/>

                    <Menu theme="dark"
                          mode="horizontal"
                          defaultSelectedKeys={["aaa"]}
                          style={{lineHeight: "34px"}}
                          selectedKeys={[selectMenu]}>
                        <SubMenu title={
                            <span className="submenu-title-wrapper"><Icon type="database"/>下拉菜单</span>
                        }>
                            <Menu.Item className={"app-menu-item"}>aaa
                                <Link to={"/aaa"}>aaa</Link>
                            </Menu.Item>
                            <Menu.Item className={"app-menu-item"}>bbb
                                <Link to={"/bbb"}>bbb</Link>
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
