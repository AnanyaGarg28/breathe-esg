import { DataManager, DataManagerHeader } from "./data-manager";

/**
 * Represents the sections of the home page.
 */
const sections: {
  id: number;
  name: string;
  icon: string;
  Header: React.FC | null;
  Content: React.FC | null;
}[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: "/images/home/sidebar/dashboard.svg",
    Header: null,
    Content: null,
  },
  {
    id: 2,
    name: "Entity Manager",
    icon: "/images/home/sidebar/entity-manager.svg",
    Header: null,
    Content: null,
  },
  {
    id: 3,
    name: "Data Manager",
    icon: "/images/home/sidebar/data-manager.svg",
    Header: DataManagerHeader,
    Content: DataManager,
  },
  {
    id: 4,
    name: "Reporting",
    icon: "/images/home/sidebar/reporting.svg",
    Header: null,
    Content: null,
  },
  {
    id: 5,
    name: "Materiality",
    icon: "/images/home/sidebar/materiality.svg",
    Header: null,
    Content: null,
  },
  {
    id: 6,
    name: "Suppliers",
    icon: "/images/home/sidebar/suppliers.svg",
    Header: null,
    Content: null,
  },
  {
    id: 7,
    name: "Analytics",
    icon: "/images/home/sidebar/analytics.svg",
    Header: null,
    Content: null,
  },
  {
    id: 8,
    name: "Targets",
    icon: "/images/home/sidebar/targets.svg",
    Header: null,
    Content: null,
  },
];

export default sections;
