import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
    return (
        <section className="sectionB">
            <span>ComponentB</span>
            <ComponentC />
        </section>
    )
}

export default ComponentB