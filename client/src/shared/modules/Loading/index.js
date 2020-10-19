import React from "react";
import { Spin, Icon } from "antd";
import './styles.less';

export const Loading = () => {
  const antIcon = <Icon type="loading" style={{ fontSize: 70 }} spin />;

  return <div id='loader-overlay'><Spin indicator={antIcon} className='zo-loading'/></div>;
};
