import React from "react";

const Fnbanners=({tittle,description,img})=>{
    return(
        <>
       
        <section className="nf-promotional-banner">
          <div className="nf-promotional-content">
            <h2 className="nf-promotional-heading">{tittle}</h2>
            <p className="nf-promotional-description">{description}
            </p>
          </div>
          <div className="nf-promotional-image">
            <img
              src={img}
              alt={tittle}
            />
          </div>
        </section>
      </>
    )
};
export default Fnbanners
