import React, { useEffect, useState} from 'react';
import { Layout, Menu } from '@src/antdModule';
import { useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import  '@styles/layout.scss';
import { LogoIcon } from '@src/assets/Image';
import Routes from '@src/Routes';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] =[{key:'home',label:'主页'},{key:'creative',label:'创作'},{key:'square',label:'广场'}];


export default function LayoutSide(props:{userInfo:string}): JSX.Element{

  const location = useLocation();

  const [selectKey,setSelectKey] = useState<Array<string>>();
  const handleSelect =(e:{key:string,keyPath:Array<string>,domEvent:any})=>{
    window.location.href=`/${e.key}`; //跳转
  }

  useEffect(()=>{
    setSelectKey([location.pathname.slice(1)]);
  },[location])

  return <>
  <Layout>
    {props.userInfo && <Header className="header">
      <div className="logo">
        <LogoIcon/>
        <span className='title'>{props.userInfo}的博客</span>
      </div>
      <Menu mode="horizontal" selectedKeys={selectKey} items={items1}  onClick={handleSelect}>
        <Routes></Routes>
      </Menu>
    </Header>}
    <Content style={props.userInfo?{ padding: '0 50px' }:{}}>
      <Layout className="site-layout-background" style={props.userInfo?{ padding: '24px 0' }:{}}>
        {props.userInfo&&<Sider className="site-layout-background" width={200}>
        </Sider>}
        <Content style={props.userInfo?{ padding: '0 24px', minHeight: 280 }:{minHeight: 280}}><Routes/></Content>
      </Layout>
    </Content>
    <Footer style={props.userInfo?{ textAlign: 'center'}:{height:'8vh',textAlign: 'center'}}>Blog ©2022 Created by HH</Footer>
  </Layout>
  </>
}
