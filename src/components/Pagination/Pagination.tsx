import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationProps } from '../../types/types.adminPanel';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Pagination: React.FC<PaginationProps> = ({
  handlePageClick,
  pageCount,
}) => {
  
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<GrFormNext />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<GrFormPrevious />}
      renderOnZeroPageCount={null}
      className="pagination"
    />
  );
};

export default Pagination;
