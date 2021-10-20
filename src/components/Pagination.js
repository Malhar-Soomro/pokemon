import React from 'react'

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
    return (
        <div>
            <button onClick={gotoPrevPage} >Prev</button>
            <button onClick={gotoNextPage} >Next</button>
        </div>
    )
}

export default Pagination
