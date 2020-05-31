import React from 'react';

export const Page = ({ title, children }) => {
    return (
        <div >
            {/* <div className="grid-container"> */}
                <div className="page">
                    <h1 className="page-title">{title}</h1>
                    <hr style={{ borderTop: '6px solid rgba(0,0,0,.1)' }} />
                    <div className="page-content">
                        {children}
                    </div>
                </div>
             {/* </div> */}
         </div>
    )
}