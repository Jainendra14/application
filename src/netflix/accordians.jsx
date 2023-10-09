import React from "react";
import Fnsubscription from "../netflix/subscription"

const Fnaccordian = () => {
    return (
        <>
        <div className="nf-main-accordians">
            <h2 className="nf-faqs-heading">Frequently Asked Questions</h2>
            <div className="nf-faq-accordians">
                <Acco
                    id={"tab1"}
                    tittle={"What is Netflix?"}
                    discription={`Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more – on
                thousands of internet-connected devices.`}
                />
                </div>
                <div className="nf-faq-accordians">
                <Acco
                    id={"tab2"}
                    tittle={"What is Netflix?"}
                    discription={`Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more – on
                thousands of internet-connected devices.`}
                />
                </div>
                <div className="nf-faq-accordians">
                <Acco
                    id={"tab3"}
                    tittle={"What is Netflix?"}
                    discription={`Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more – on
                thousands of internet-connected devices.`}
                />
                </div>
                <div className="nf-faq-accordians">
                <Acco
                    id={"tab4"}
                    tittle={"What is Netflix?"}
                    discription={`Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more – on
                thousands of internet-connected devices.`}
                />
                </div>
                <Fnsubscription/>

        </div>
        </>
        );


            
};



const Acco =({ id, tittle, discription}) => {
    return (
        <div className="nf-accordion">
        <input type="checkbox" id={id} />
        <label className="accordion-label" for={id}>
            <span> {tittle}</span> <i className="fa-solid fa-plus"></i>
            </label>
        <div className="accordion-content">{discription}
        </div>
    </div>
            )
            }
export default Fnaccordian