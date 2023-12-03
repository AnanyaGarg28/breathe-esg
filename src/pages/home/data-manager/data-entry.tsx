import Table from "../../../components/table";
import { jsonToCSV } from "../../../util";

/**
 * Renders the header for the data entry section.
 * @returns JSX.Element
 */
export const DataEntryHeader = () => {
  return (
    <>
      <div className="seperator" />
      <button>Submit for Approval</button>
    </>
  )
};

/**
 * Renders the data entry component.
 * @returns JSX.Element
 */
export default function DataEntry() {
  const dummyData: {
    assessmentTitle: string;
    type: string;
    noOfSuppliers: number;
    score: number | null;
    riskClassification: string;
    status: string;
    result: { resultAvailable: boolean };
  }[] = [
    {
      assessmentTitle: "Assessment 1",
      type: "BRSR",
      noOfSuppliers: 20,
      score: null,
      riskClassification: "Medium",
      status: "Pending",
      result: {
        resultAvailable: false,
      },
    },
    {
      assessmentTitle: "Assessment 2",
      type: "BRSR",
      noOfSuppliers: 25,
      score: 98,
      riskClassification: "Low",
      status: "Complete",
      result: {
        resultAvailable: true,
      },
    },
    {
      assessmentTitle: "Assessment 3",
      type: "BRSR",
      noOfSuppliers: 35,
      score: 22,
      riskClassification: "High",
      status: "Complete",
      result: {
        resultAvailable: true,
      },
    },
    {
      assessmentTitle: "Assessment 4",
      type: "Custom",
      noOfSuppliers: 49,
      score: 23,
      riskClassification: "Medium",
      status: "Complete",
      result: {
        resultAvailable: true,
      },
    },
    {
      assessmentTitle: "Assessment 5",
      type: "Custom",
      noOfSuppliers: 100,
      score: 42,
      riskClassification: "Medium",
      status: "Complete",
      result: {
        resultAvailable: true,
      },
    },
  ];
  return (
    <div className="data-entry">
      <Table
        csv={jsonToCSV(dummyData)}
        data={dummyData.map(
          ({
            assessmentTitle,
            type,
            noOfSuppliers,
            score,
            riskClassification,
            status,
            result,
          }) => ({
            checkbox: {
              customComponent: <input type="checkbox" className="checkbox"/>,
              value: false,
            },
            assessmentTitle: {
              customComponent: (
                <div className="assessment-title">{assessmentTitle}</div>
              ),
              value: assessmentTitle,
            },
            type: {
              label: type,
              value: type,
            },
            noOfSuppliers: {
              label: `${noOfSuppliers}`,
              value: noOfSuppliers,
            },
            score: {
              label: `${score === null ? "-" : score}`,
              value: score || 0,
            },
            riskClassification: {
              customComponent: (
                <div className="risk-classification-cell">
                  <div
                    className={`${riskClassification.toLowerCase()}-dot risk-classification-dot`}
                  />
                  <div>
                    {riskClassification[0].toUpperCase() +
                      riskClassification.slice(1)}
                  </div>
                </div>
              ),
              value: riskClassification,
            },
            status: {
              customComponent: (
                <div className={`${status.toLowerCase()}-status status`}>
                  <span>{status}</span>
                </div>
              ),
              value: status,
            },
            result: {
              customComponent: (
                <div className="result">
                  {result.resultAvailable ? (
                    <button className="view-button">
                      <span>View</span>
                    </button>
                  ) : (
                    <>-</>
                  )}
                </div>
              ),
              value: result,
            },
            action: {
                customComponent: (
                    <div className="action-container">
                        <img src="/images/home/data-manager/share.svg" alt="share"/>
                        <img src="/images/home/data-manager/delete.svg" alt="delete"/>
                    </div>
                ),
                value:null,
            }
          })
        )}
        columns={[
          {
            accessor: "checkbox",
            customComponent: (
              <input type="checkbox" className="checkbox"/>
            ),
            comparable: {
              value: false,
            },
          },
          {
            header: "ASSESSMENT TITLE",
            accessor: "assessmentTitle",
            comparable: {
              value: true,
              compare: (a, b) => (a.value > b.value ? 1 : -1),
            },
          },
          {
            header: "TYPE",
            accessor: "type",
            comparable: {
              value: true,
              compare: (a, b) => (a.value > b.value ? 1 : -1),
            },
          },
          {
            header: "NO. OF SUPPLIERS",
            accessor: "noOfSuppliers",
            comparable: {
              value: true,
              compare: (a, b) => (a.value > b.value ? 1 : -1),
            },
          },
          {
            header: "SCORE",
            accessor: "score",
            comparable: {
              value: true,
              compare: (a, b) => (a.value > b.value ? 1 : -1),
            },
          },
          {
            header: "RISK CLASSIFICATION",
            accessor: "riskClassification",
            comparable: {
              value: true,
              compare: (a, b) => (a.value > b.value ? 1 : -1),
            },
          },
          {
            header: "STATUS",
            accessor: "status",
            comparable: {
              value: true,
              compare: (a, b) => (a.value > b.value ? 1 : -1),
            },
          },
          {
            header: "RESULT",
            accessor: "result",
            comparable: {
              value: false,
            },
          },
          {
            header: "ACTION",
            accessor: "action",
            comparable: {
              value: false,
            },
          },
        ]}
        search={{
          searchable: false,
        }}
      />
    </div>
  );
}
