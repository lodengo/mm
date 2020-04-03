import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';

import { Dropdown, Button, Menu } from 'antd';
import {  
  FileOutlined  
} from '@ant-design/icons';

const newFileMenu = (
  <Menu>
    <Menu.Item>
      <FileOutlined />新建概算
    </Menu.Item>
    <Menu.Item>
      <FileOutlined />新建预算
    </Menu.Item>
    <Menu.Item>
      <FileOutlined />新建结算
    </Menu.Item>
    <Menu.Item>
      <FileOutlined />新建审核
    </Menu.Item>
  </Menu>
);

const DesktopSlider = ()=> {
    return (      
      <Menu>
        <Menu.Item>
          <Dropdown overlay={newFileMenu} placement="bottomLeft" trigger={['click']}>
            <Button type="primary" size="large" block>新建</Button>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="1">
              <FileOutlined />
              <span>我的文档</span>
        </Menu.Item>
        <Menu.Item key="2">
              <FileOutlined />
              <span>最近浏览</span>
        </Menu.Item>
        <Menu.Item key="3">
              <FileOutlined />
              <span>与我共享</span>
        </Menu.Item>
        <Menu.Item key="4">
              <FileOutlined />
              <span>星标文档</span>
        </Menu.Item>
        <Menu.Item key="5">
              <FileOutlined />
              <span>回收站</span>
        </Menu.Item>
      </Menu>      
    );
};

export default DesktopSlider;
