import React, {useContext, useState} from "react";

export const ModalContext = React.createContext();
export const ModalUpdateContext = React.createContext();

export function useModal() {
    return useContext(ModalContext);
}

export function useModalUpdate() {
    return useContext(ModalUpdateContext);
}

export function ModalProvider( {children} ) {
    const [showModal, setShowModal] = useState(false);

    const ToggleModal = () => {
        return setShowModal(prevShowModal => !prevShowModal);
    };


    return (
        <ModalContext.Provider value={showModal}>
            <ModalUpdateContext.Provider value={ToggleModal}>
                {children}
            </ModalUpdateContext.Provider>
        </ModalContext.Provider>
    )
}