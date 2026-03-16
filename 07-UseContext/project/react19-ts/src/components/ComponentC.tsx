import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = () => {
    return (
        <section className="sectionC">
            <span>ComponentC</span>
            <ComponentD />
        </section>
    )
}

export default ComponentC