import React from "react";
import Fnbanners from "./banners";

const Fnbanner = () => {
    return (

        <div className="nf-promotional-content">
            <Fnbanners
                tittle="Enjoy on your"

                description={
                    "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}
                    img={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"}

            />

            <Fnbanners
                tittle="Create profiles for kids"

                description={
                    "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
                }
                img={"https://occ-0-2086-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABcP49QA_MBbiVxTKVXPBboKPaOe5Lwwk5HwkQ4kgf0B997QbxljlGGmNMua338tvcBEUg-plCFXsCZmkoQoYflHdxgfwjOP5rgeQ.png?r=df8"
                }

            />
             <Fnbanners
                tittle="Create profiles for kids"

                description={
                    "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
                }
                img={"https://occ-0-2086-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABcP49QA_MBbiVxTKVXPBboKPaOe5Lwwk5HwkQ4kgf0B997QbxljlGGmNMua338tvcBEUg-plCFXsCZmkoQoYflHdxgfwjOP5rgeQ.png?r=df8"
                }

            />
        </div>
    )
};
export default Fnbanner;