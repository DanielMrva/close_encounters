import React, {useContext, useState} from "react";
import {useMap, useMapEvents} from "react-leaflet"

export const NewMarkerContext = React.createContext();

export function BoundsProvider( {children} ) {
    const [showModal, setShowModal] = useState(false);

    const useBoundsBox = () => {
        return useContext(BoundsContext)
    };

    const useBoundsBoxUpdate = () => {
        return useContext(BoundsUpdateContext);
    }



       
    return (
        <BoundsContext.Provider value=  {boundsBox}>
            <BoundsUpdateContext value={GetBoundBox}>
                {children}
            </BoundsUpdateContext>
        </BoundsContext.Provider>
    )
}
