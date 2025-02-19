import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { userPaths } from "../../routes/user.routes";

const { Sider } = Layout;

  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    USER: "user",
  };
  const Sidebar = () => {
    const role = "user";
    let sidebarItems;
    switch (role) {
      case userRole.ADMIN:
        sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
        break;
      case userRole.FACULTY:
        sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
        break;
      case userRole.USER:
        sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
        break;

      default:
        break;
    }
 

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Bicycle Store</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
