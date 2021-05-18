import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu, Image } from "antd";
import AvatarEditor from "react-avatar-editor";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
/*------------------------------------------*/
import headImg from "../LeftNav/Image/HeadPicture.jpg";
import "./LeftNav.css";
import FrmUpdateAvatar from "../Avatar/FrmUpdateAvatar";
/*------------------------------------------*/
//const { SubMenu } = Menu;

class LeftNav extends Component {
  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          backgroundColor: "lavenderblush",
          height: "100%",
          width: "280px",
        }}
      >
        <AvatarEditor
          image={<Image src={headImg} />}
          width={100}
          height={100}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
          //onImageChange={<FrmUpdateAvatar/>}
        >
        </AvatarEditor>
        <div>
        <FrmUpdateAvatar/>
        </div>
        
        
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/personalCenter/postAll">全部帖子</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/personalCenter/news">消息</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/personalCenter/richText">写帖子</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          <Link to="/personalCenter/postempty">空状态帖子</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(LeftNav);
/**
 * <Avatar
          src={<Image src={headImg} />}
          size={60}
          
        >
          onClick={}
        </Avatar>
 * 
 * <AvatarEditor
          image={<Image src={headImg} />}
          width={100}
          height={100}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
          //onImageChange={<FrmUpdateAvatar/>}
        >
        </AvatarEditor>
 * 
 * menuList;

  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      if (!item.child) {
        return (
          <Menu.Item key={item.url}>
            <Link to={item.url}>
              <span>{item.text}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        const subItem = item.child.find((subItem) => {
          console.log(subItem.url);
          console.log(this.props.location.pathname);
          console.log(subItem.url === this.props.location.pathname);
          return subItem.url === this.props.location.pathname;
        });
        if (subItem) {
          this.openKey = item.url;
        }
        return (
          <SubMenu
            key={item.url}
            title={
              <span>
                <span>{item.text}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.child)}
          </SubMenu>
        );
      }
    });
  };

  renderMenu(menuList) {
    const path = this.props.location.pathname;
    const openKey = this.openKey;
    console.log("render->" + openKey);
    return (
      <div>
        <Link to=" ">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
            src={headImg}
          />
        </Link>
        <Menu
          theme="dark"
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          style={{ width: "100%" }}
        >
          {this.getMenuNodes(menuList)}
        </Menu>
      </div>
    );
  }

  render() {
    return (
      <Get url="http://localhost:5000/api/Menu">
        {(error, response, isLoading, onReload) => {
          if (error) {
            return (
              <div>
                Something bad happened: {error.message}{" "}
                <button onClick={() => onReload({ params: { reload: true } })}>
                  Retry
                </button>
              </div>
            );
          } else if (isLoading) {
            return <div>Loading...</div>;
          } else if (response !== null) {
            //请求成功 渲染菜单
            return this.renderMenu(response.data);
          }
          return <div>Default message before request is made.</div>;
        }}
      </Get>
    );
  }
 */
