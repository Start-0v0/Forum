import React from "react";
import { Layout } from "antd";
import { Route, Switch, withRouter } from "react-router";
/*------------------------------------------*/
import LeftNav from "./LeftNav/LeftNav.js";
import RichText from "./RichText/RichText.js";
import News from "./News/News.js";
import PostAll from "./PostAll/PostAll.js";
import Header from "./Header/Header.js";
import "./PersonalCenter.css";
import PostEmpty from "./PostEmpty/PostEmpty.js";
/*------------------------------------------*/
const { Footer, Sider, Content } = Layout;

function PersonalCenter() {
    return (
      <Layout style={{ height: "100%",backgroundColor:"white"}}>
        <Header style={{ padding: 0 }} />
        <Layout style={{margin:"40px 80px 0px 80px",backgroundColor:"rgb(229, 241, 250)"}}>
          <Sider style={{backgroundColor:"white"}}>
            <LeftNav/>
          </Sider>
          <Content style={{ margin: "0 16px 20px 80px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route path="/personalCenter/postAll" component={PostAll} exact/>
                <Route path="/personalCenter/news" component={News} />
                <Route path="/personalCenter/richText" component={RichText} />
                <Route path="/personalCenter/postempty" component={PostEmpty} />
              </Switch>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" ,backgroundColor:"white",marginTop:"50px"}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
}

export default withRouter(PersonalCenter);
