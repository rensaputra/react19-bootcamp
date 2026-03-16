import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
    return (
        <section className="sectionA">
            <span>ComponentA</span>
            <ComponentB />
        </section>
    );
};

export default ComponentA;
