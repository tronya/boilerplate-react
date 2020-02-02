import React from 'react';
import { array } from 'prop-types';
import { usePagination, useSortBy, useTable } from 'react-table';
import classNames from 'classnames';
import Pagination from './pagination';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
  );

  return (
    <>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, headersIndex) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th
                  key={headersIndex}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={classNames('table__header', {
                    'table__header--boldText': column.isSorted,
                  })}
                >
                  {column.render('Header')}
                  <span
                    className={classNames('table__sort-icon', {
                      'table__sort-icon--top': column.isSorted && column.isSortedDesc,
                      'table__sort-icon--bot': column.isSorted && !column.isSortedDesc,
                    })}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, ind) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table__row" key={ind}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    {...cell.getCellProps()}
                    className={classNames('table__cell', {
                      'table__cell--bold': cell.column.boldText,
                    })}
                  >
                    {cell.column.Header === 'Actions' ? (
                      <>
                        <button className="table__icon" onClick={() => alert(`add ${cell.row.values.id}`)}>
                          <i className="add-project__icon">
                            <span className="add-1" />
                            <span className="add-2" />
                          </i>
                        </button>
                        <button className="table__icon" onClick={() => alert(`edit ${cell.row.values.id}`)}>
                          <i className="edit-project__icon" />
                        </button>
                        <button className="table__icon" onClick={() => alert(`delete ${cell.row.values.id}`)}>
                          <i className="delete-project__icon" />
                        </button>
                      </>
                    ) : null}
                    {/*eslint-disable*/}
                    {cell.column.Header === 'Status' ? (
                      cell.value ? (
                        <span className="table__status table__status--active">Active</span>
                      ) : (
                        <span className="table__status table__status--inactive">Inactive</span>
                      )
                    ) : (
                      cell.render('Cell')
                    )}
                    {/*eslint-anable*/}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        {...{
          nextPage,
          previousPage,
          canPreviousPage,
          canNextPage,
          pageIndex,
          pageSize,
          pageOptions,
          gotoPage,
        }}
      />
    </>
  );
};

Table.propTypes = {
  columns: array,
  data: array,
};

export default Table;
