import React from 'react'


const Pagination = props => {
    
    return(
        <div className = "py-3">
            <button type = "button" onClick = {props.previousPage} className = "btn btn-info mr-1">
            <span className="glyphicon glyphicon-backward"></span>  Anterrior</button>
            <button type = "button" onClick = {props.nextPage}  className = "btn btn-info mr-1"> 
            Siguiente <span className="glyphicon glyphicon-forward"></span></button>
        </div>

    )
}

export default Pagination