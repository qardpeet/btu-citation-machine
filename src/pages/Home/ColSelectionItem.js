import React from 'react';

const ColSelectionItem = ({ title, icon, backgroundColor }) => {
    return (
        <div className="col s12 m6 l4" style={{ padding: '.75rem' }}>
            <div className="single-item" style={{ backgroundColor: backgroundColor }}>
                <i className="material-icons">{icon}</i>
                <h5>{title}</h5>
            </div>
        </div>
    );
};

export default ColSelectionItem;
