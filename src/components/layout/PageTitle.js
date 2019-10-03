import React from 'react';

const PageTitle = ({pageTitle}) => {
    return (
        <div className="row">
            <div className="col s12">
                <h4 className="light-green-text">{ pageTitle }</h4>                            
            </div>
        </div>
    )
}

export default PageTitle;