import React, { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import "./paginationBar.scss"
import { FilterContext } from '../../context/FilterContext'

const PaginationBar = () => {
  const { setFilterItems } = useContext(FilterContext)
  const handleClick = (data: any) => {
    setFilterItems((prev) => ({ ...prev, pageNumber: data.selected + 1 }))
  }
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handleClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={29}
      previousLabel="<"
      renderOnZeroPageCount={null}
      pageClassName="page-links"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      breakLabel="..."
    />
  )
}

export default PaginationBar