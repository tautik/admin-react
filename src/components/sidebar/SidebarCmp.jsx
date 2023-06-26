import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SidebarCmp = () => {
  return (
    <h1 className="">
      <Sidebar width="14rem">
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </h1>
  );
};

export default SidebarCmp;
