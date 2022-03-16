/* eslint-disable no-unused-vars */
import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={"nft"}
      // defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/nftmarket">
        <NavLink to="/nftmarket">Market</NavLink>
      </Menu.Item>

      <Menu.Item key="/nft">
        <NavLink to="/nft">NFT Collection</NavLink>
      </Menu.Item>

      <Menu.Item key="/transaction">
        <NavLink to="/transaction">Transactions</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
