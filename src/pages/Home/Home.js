import React from 'react';
import ColSelectionItem from './ColSelectionItem';

const Home = () => {
    return (
        <div className="wrapper-center">
            <div className="container">
                <div className="row">
                    <ColSelectionItem title="წიგნი" icon="book" backgroundColor="#01579b" />
                    <ColSelectionItem title="სტატია" icon="dehaze" backgroundColor="#c2185b" />
                    <ColSelectionItem title="ვებ-გვერდი" icon="web" backgroundColor="#689f38" />
                </div>
            </div>
        </div>
    );
};

export default Home;
