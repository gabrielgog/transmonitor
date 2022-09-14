import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

interface type {
  changeCurrentPage?: () => any;
  forcePage?: any
  currentPage?: number | any
  totalPage?: any
  pageRange?: number

}

const Pagination = ({ changeCurrentPage, forcePage, currentPage, totalPage, pageRange }: type) => {
  return (
    <div className={styles.pagination}>
      <p>
        Showing Page {currentPage} of {totalPage}
      </p>

      <ReactPaginate
        previousLabel={totalPage > 1 ? 'Prev' : null}
        nextLabel={totalPage > currentPage ? 'Next' : null}
        breakLabel="..."
        pageCount={totalPage}
        onPageChange={changeCurrentPage}
        marginPagesDisplayed={1}
        activeClassName={styles.activePaginate}
        forcePage={forcePage}
      />
    </div>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPage: 10,
  changeCurrentPage: null,
  forcePage: false
};



export default Pagination;
