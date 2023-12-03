import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useState } from "react";
import DataEntry, { DataEntryHeader } from "./data-entry";
import Tracker from "./tracker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { setSubSection } from "../../../redux/nav/navSlice";

/**
 * Represents an array of sub-sections.
 */
const subSections = [
    {
      id: 1,
      label: "Data Entry",
      icon: <img src="/images/home/dimensions/data-entry.svg" alt="" />,
      iconActive: (
        <img src="/images/home/dimensions/data-entry-active.svg" alt="" />
      ),
      Component: DataEntry,
      ExtroHeader: DataEntryHeader
    },
    {
      id: 2,
      label: "Tracker",
      icon: <img src="/images/home/dimensions/tracker.svg" alt="" />,
      iconActive: (
        <img src="/images/home/dimensions/tracker-active.svg" alt="" />
      ),
      Component: Tracker,
      ExtroHeader: null
    },
];

/**
 * Represents the data manager header component.
 * This component displays the header section of the data manager page.
 */
export const DataManagerHeader: React.FC = () => {
  const [selected, setSelected] = useState("1");
  const activeSubSectionId = useSelector((state: RootState) => state.nav.currentSubSection);
  const activeSubSection = subSections.find((item) => item.id === activeSubSectionId);
  const usedispatch: () => AppDispatch = useDispatch;
  const dispatch = usedispatch();
  const items = [
    {
      key: "1",
      label: "FY 2023-24",
    },
  ];

  const selectedItem = items.find((item) => item.key === selected);
  return (
    <div className="data-manager-header section-header">
      <div className="subsection-header">
        {subSections.map((item) => (
          <div
            key={item.id}
            onClick={() => {
                dispatch(setSubSection(item.id));
            }}
          >
            {item.id === activeSubSectionId ? item.iconActive : item.icon}
            <div className={item.id === activeSubSectionId ? "active" : ""}>
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
        {
            activeSubSection?.ExtroHeader && <activeSubSection.ExtroHeader />
        }
      </div>
    </div>
  );
};

/**
 * Represents the data manager component.
 * This component displays the main content of the data manager page.
 */
export const DataManager: React.FC = () => {
  const activeSubSectionId = useSelector((state: RootState) => state.nav.currentSubSection);
  const activeSubSection = subSections.find((item) => item.id === activeSubSectionId);
  return (
    <div className="data-manager">
      {activeSubSection && <activeSubSection.Component />}
    </div>
  );
};
