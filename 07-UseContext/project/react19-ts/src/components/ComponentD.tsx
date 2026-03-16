import React from 'react'
import AppContext from '../store/AppContext';

const ComponentD = () => {
    const str = String(React.useContext(AppContext));
    return (
        <section className='sectionD'>
            <span>ComponentD</span>
            <h2>{str}</h2>
        </section>
    )
}

export default ComponentD