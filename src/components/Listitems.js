import React from "react";

function Listitems({ title, items }) {
    return (
      <section>
        <h3>{title}</h3>
        <ul>
        { items.map((item, key) => 
            <li key={key}>{item}</li>
        )}
        </ul>
      </section>
    );
}

export default Listitems
