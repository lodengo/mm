import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import { Layout, Divider} from 'antd';
import DesktopSlider from '../components/desktop/DesktopSlider'

const DesktopPage = () => {    
    const history = useHistory();

    const logout = () => {
        Meteor.logout();
        history.replace('/login');
    };

    const { Header, Content, Sider } = Layout;
    return (
       <Layout>
           <Sider>
            <DesktopSlider></DesktopSlider>
           </Sider>           
           <Layout>
               <Content></Content>
           </Layout>
       </Layout>
    );
};

export default DesktopPage;