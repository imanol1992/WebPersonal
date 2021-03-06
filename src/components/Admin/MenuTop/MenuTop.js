import React from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import ImaLogo from "../../../assets/img/png/IMANOL-LO.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={ImaLogo}
          alt="Imanol Bernardino Alonso"
        />
        {/* REVISAR ESTE COLAPSABLE (MenuUnfoldOutlined , MenuFoldOutlined ) */}
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <MenuUnfoldOutlined
            type={!menuCollapsed ? "MenuUnfoldOutlined" : "MenuFoldOutlined"}
          />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
