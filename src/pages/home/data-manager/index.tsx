import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useState } from "react";
import DataEntry from "./data-entry";
import Tracker from "./tracker";

export const DataManagerHeader: React.FC = () => {
  const [selected, setSelected] = useState("1");
  const items = [
    {
      key: "1",
      label: "FY 2023-24",
    },
  ];

  const subSections = [
    {
      key: "1",
      label: "Data Entry",
      icon: <img src="/images/home/dimensions/data-entry.svg" alt="" />,
      iconActive: (
        <img src="/images/home/dimensions/data-entry-active.svg" alt="" />
      ),
      Component: DataEntry,
    },
    {
      key: "2",
      label: "Tracker",
      icon: <img src="/images/home/dimensions/tracker.svg" alt="" />,
      iconActive: (
        <img src="/images/home/dimensions/tracker-active.svg" alt="" />
      ),
      Component: Tracker,
    },
  ];

  const selectedItem = items.find((item) => item.key === selected);
  const [activeSubSection, setActiveSubSection] = useState("1");
  return (
    <div className="data-manager-header section-header">
      <div className="subsection-header">
        {subSections.map((item) => (
          <div
            key={item.key}
            onClick={() => {
              setActiveSubSection(item.key);
            }}
          >
            {item.key === activeSubSection ? item.iconActive : item.icon}
            <div className={item.key === activeSubSection ? "active" : ""}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
      <div className="picker">
        <div className="dropdown-div">
          <div className="for">For:</div>
          <Dropdown
            menu={{
              items,
              onClick: ({ key }) => {
                setSelected(key);
              },
            }}
          >
            {selectedItem ? (
              <div className="dropdown">
                <div>{selectedItem.label}</div>
                <DownOutlined />
              </div>
            ) : (
              <div>Select</div>
            )}
          </Dropdown>
        </div>
        <div className="seperator" />
        <button>Submit for Approval</button>
      </div>
    </div>
  );
};

export const DataManager: React.FC = () => {
  return (
    <div className="data-manager">
      {/* <DataEntry /> */}
      <Tracker />
    </div>
  );
};
