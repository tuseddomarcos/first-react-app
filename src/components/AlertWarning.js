import React from 'react'

const AlertWarning = props => {
    return (
        <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">!Atecion</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        {this.props.msgWarning}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlertWarning;