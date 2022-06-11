import React, {useContext, useState} from "react";
import {useMap, useMapEvents} from "react-leaflet"

export const BoundsContext = React.createContext();
export const BoundsUpdateContext = React.createContext();


export function BoundsProvider( {children} ) {
    const [boundsBox, setBoundsBox] = useState({});

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