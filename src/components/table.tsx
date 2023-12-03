import { useState } from "react";

/**
 * Table component that displays data in a tabular format.
 * 
 * @param columns - An array of column configurations.
 * @param data - An array of data objects.
 * @param search - An object that defines the search functionality.
 * @param csv - Optional CSV file path for downloading data.
 * @returns The rendered table component.
 */
export default function Table({
  columns,
  data,
  search,
  csv
}: {
  columns: {
    header?: string;
    accessor: string;
    customComponent?: JSX.Element;
    comparable:
      | {
          value: true;
          compare: (a: any, b: any) => number;
        }
      | {
          value: false;
        };
  }[];
  data: {
    [key: string]: {
      label?: string;
      customComponent?: JSX.Element;
      value: any;
    };
  }[];
  search: {
    searchable : true;
    searchBy : string[];
    customSearchComponent ?: JSX.Element;
  } | {
    searchable : false;
  };
  csv?: string
}) {
  const [sortBy, setSortByAct] = useState<string | null>(null);
  const [stortedData, setSortedData] = useState(data);

  /**
   * Sets the sort by accessor and updates the sorted data accordingly.
   * If the accessor is already the current sort by accessor, it resets the sort by accessor and sets the sorted data to the original data.
   * If the accessor is different from the current sort by accessor, it sets the sort by accessor and sorts the data based on the comparable value of the column.
   * 
   * @param accessor - The accessor string used to identify the column to sort by.
   */
  const setSortBy = (accessor: string) => {
    if (sortBy === accessor) {
      setSortByAct(null);
      setSortedData(data);
    } else {
      const comparable = columns.find(
        (c) => c.accessor === accessor
      )?.comparable;
      if (comparable?.value) {
        setSortByAct(accessor);
        setSortedData((sortedData) =>
          [...sortedData].sort((a, b) =>
            comparable.compare(a[accessor], b[accessor])
          )
        );
      }
    }
  };
  return (
    <>
    <div className="search-container">
      {search.searchable && search.customSearchComponent}
    </div>
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={
                `${
                  index === 0
                  ? "first-cell"
                  : index === columns.length - 1
                  ? "last-cell"
                  : ""
                } ${
                  column.comparable.value
                    ? "sortable"
                    : ""
                }`
              }
              onClick={() => {
                if(column.comparable.value)
                  setSortBy(column.accessor)
              }}
            >
              {column.customComponent ? column.customComponent : column?.header}
              <span className={sortBy === column.accessor ? "" : "opacity-0"}>
                {" "}
                ↓
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stortedData.map((row, rindex) => (
          <tr key={rindex}>
            {columns.map((column, index) => (
              <td
                key={column.accessor}
                className={`${
                  index === 0
                    ? "first-cell"
                    : index === columns.length - 1
                    ? "last-cell"
                    : ""
                }
                    ${rindex === data.length - 1 ? "bottom-row" : ""}`}
              >
                {row[column.accessor].customComponent
                  ? row[column.accessor].customComponent
                  : row[column.accessor]?.label}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="download-csv">
      <a href={csv} download="data.csv" className="download-csv-button">
        Download CSV
      </a>
    </div>
    </>
  );
}
