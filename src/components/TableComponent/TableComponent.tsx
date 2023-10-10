import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Device, dummyData } from "../../DummyData/dummydata";
import "./TableComponent.css";
import {
  useTable,
  usePagination,
  TableInstance,
  TableState,
  UsePaginationInstanceProps,
  UsePaginationState,
} from "react-table";

type MyTableInstance<D extends object = {}> = TableInstance<D> & UsePaginationInstanceProps<D>;
type MyTableState<D extends object = {}> = TableState<D> & UsePaginationState<D>;

const TableComponent: React.FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Type",
        accessor: "type" as keyof Device,
      },
      {
        Header: "Manufacturer",
        accessor: "Manufacturer" as keyof Device,
      },
      {
        Header: "Model",
        accessor: "Model" as keyof Device,
      },
      {
        Header: "Version",
        accessor: "Version" as keyof Device,
      },
      {
        Header: "Description",
        accessor: "Description" as keyof Device,
      },
      {
        Header: "Options",
        accessor: "Options" as keyof Device,
      },
      {
        Header: "Serial Number",
        accessor: "Serial_number" as keyof Device,
      },
    ],
    []
  );

  const tableInstance: MyTableInstance<Device> = useTable<Device>(
    {
      columns,
      data: dummyData,
      initialState: { pageIndex: 0, pageSize: 2 } as any,
    },
    usePagination
  ) as MyTableInstance<Device>;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
  } = tableInstance;

  const { pageSize } = state as MyTableState<Device>;
  return (
    <>
      <table {...getTableProps()} className="styled-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
      <span>Results on Page</span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[2, 5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <ButtonGroup spacing={4} mt={4}>
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            colorScheme="blue"
            variant="ghost"
            size="sm"
            iconSpacing="0"
            leftIcon={<ChevronLeftIcon color="#0063FF" />}
          />

          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            colorScheme="blue"
            variant="ghost"
            size="sm"
            iconSpacing="0"
            rightIcon={<ChevronRightIcon color="#0063FF" />}
          />
        </ButtonGroup>
      </div>
    </>
  );
};

export default TableComponent;
