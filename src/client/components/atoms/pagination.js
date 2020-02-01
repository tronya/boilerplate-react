import React from 'react';
import classNames from 'classnames';

const Pagination = ({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageIndex,
  pageSize,
  pageOptions,
  gotoPage,
}) => {
  const po = pageOptions.fill('');
  const createPaginationItems = po.map((page, i) => (
    <li
      className={classNames('pagination__item', {
        'pagination__item--active': pageIndex === i,
      })}
      key={i}
    >
      <button onClick={() => gotoPage(i)} className="page">
        {i + 1}
      </button>
    </li>
  ));

  return (
    <section>
      <div className="pagination">
        <ul className="pages">{createPaginationItems}</ul>
      </div>
      <div className="pagination__amount">{`Showing ${pageIndex + 1} of ${po.length} entries`}</div>
    </section>
  );
};

export default Pagination;
