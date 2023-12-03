import { SearchOutlined } from "@ant-design/icons";
import Table from "../../../components/table";
import { jsonToCSV } from "../../../util";

/**
 * Represents the Tracker component.
 * This component displays a table with tracker data.
 */
export default function Tracker() {
  /**
   * Represents dummy data for the tracker.
   */
  const dummyData = [
    {
      month: "Jan 2023",
      status: "Pending Approval (1/12)",
      completion: "20%",
      businessUnit: "Business Unit 1",
    },
    {
      month: "Feb 2023",
      status: "Approved (2/12)",
      completion: "30%",
      businessUnit: "Business Unit 1",
    },
    {
      month: "Mar 2023",
      status: "Incomplete (4/12)",
      completion: "50%",
      businessUnit: "Business Unit 1",
    },
  ];
  return (
    <div className="tracker">
      <div className="summary">
        <div className="insights">
          <div className="insight-div">
            <div className="data">
              <div className="title">PENDING TRACKERS</div>
              <div className="value">45/60</div>
            </div>
            <div className="icon-div">
              <img src="/images/home/dimensions/tracker.svg" alt="pending" />
            </div>
          </div>
          <div className="insight-div">
            <div className="data">
              <div className="title">PENDING REVIEWS</div>
              <div className="value">3</div>
            </div>
            <div className="icon-div">
              <img src="/images/home/dimensions/tracker.svg" alt="pending" />
            </div>
          </div>
        </div>
        <div className="autosave">Autosaved at 12:31 pm</div>
      </div>
      <Table
        csv = {jsonToCSV(dummyData)}
        columns={[
          {
            accessor: "month",
            header: "Month",
            comparable: {
              value: true,
              compare: (a, b) => {
                const aDate = new Date(a.value);
                const bDate = new Date(b.value);
                return aDate.getTime() - bDate.getTime();
              },
            },
          },
          {
            accessor: "status",
            header: "Status",
            comparable: {
              value: true,
              compare: (a, b) => (a.value >= b.value ? 1 : -1),
            },
          },
          {
            accessor: "completion",
            header: "Completion",
            comparable: {
              value: true,
              compare: (a, b) => {
                const aNumber = parseInt(a.value.split("%")[0]);
                const bNumber = parseInt(b.value.split("%")[0]);
                return aNumber - bNumber;
              },
            },
          },
          {
            accessor: "businessUnit",
            header: "Business Unit",
            comparable: {
              value: true,
              compare: (a, b) => (a.value >= b.value ? 1 : -1),
            },
          },
        ]}
        data={dummyData.map(({ month, status, completion, businessUnit }) => ({
          month: {
            label: month,
            value: month,
          },
          status: {
            customComponent: (
              <div
                className={`status ${
                  status.toLowerCase().includes("pending")
                    ? "pending-status"
                    : status.toLowerCase().includes("approved")
                    ? "approved-status"
                    : status.toLowerCase().includes("incomplete")
                    ? "incomplete-status"
                    : ""
                }`}
              >
                {status}
              </div>
            ),
            value: status,
          },
          completion: {
            label: completion,
            value: completion,
          },
          businessUnit: {
            label: businessUnit,
            value: businessUnit,
          },
        }))}
        search={{
          searchable: true,
          searchBy: ["businessUnit"],
          customSearchComponent: (
            <div className="search-bar">
              <SearchOutlined className="search-icon" />
              <input type="text" placeholder="Search for a business unit" />
            </div>
          ),
        }}
      />
    </div>
  );
}
