import React from 'react';

export const Page =({title, children}) => {
    return(
        <div style={{ textAlign: 'left', margin: '20px' }}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}