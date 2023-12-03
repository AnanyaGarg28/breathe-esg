import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";


const items = [
  {
    key: "1",
    label: "North India Region",
    icon: <img src="/images/home/userbar/business-region.svg" alt="" />,
  },
];

/**
 * UserHeader component.
 * @returns JSX.Element
 */
export default function UserHeader() {
  const [selected, setSelected] = useState("1");
  const activeItem = items.find((item) => item.key === selected);
  return (
    <div className="user-header">
      <div className="app-options">
        <div className="viewname">
          <img src="/images/logo-horizontal.png" alt="logo" />
          <div>View Name</div>
        </div>
        <Dropdown
          menu={{
            items,
            onClick: ({ item, key }) => {
              setSelected(key);
            },
          }}
        >
          {activeItem ? (
            <div className="dropdown">
              {activeItem.icon}
              <div>{activeItem.label}</div>
              <DownOutlined />
            </div>
          ) : (
            <div>"Select"</div>
          )}
        </Dropdown>
      </div>
      <div className="user-options">
        <div className="notifications">
          <img src="/images/home/userbar/notification.svg" alt="" />
        </div>
        <div className="avatar">
          <span>John Doe</span>
          <img src="/images/home/userbar/avatar.png" alt="" />
        </div>
      </div>
    </div>
  );
}
