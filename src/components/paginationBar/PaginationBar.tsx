import React from 'react'
import ReactPaginate from 'react-paginate'
import "./paginationBar.scss"

const PaginationBar = (props : {setPageNumber : React.Dispatch<React.SetStateAction<number>>}) => {
  const handleClick = (data : any) => {
    props.setPageNumber(data.selected + 1)
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
      pageClassName="page-item"
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