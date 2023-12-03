import { useState } from "react";

export default function Table({
  columns,
  data,
  search,
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
}) {
  const [sortBy, setSortByAct] = useState<string | null>(null);
  const [stortedData, setSortedData] = useState(data);

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
                index === 0
                  ? "first-cell"
                  : index === columns.length - 1
                  ? "last-cell"
                  : ""
              }
              onClick={() => setSortBy(column.accessor)}
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
    </>
  );
}
