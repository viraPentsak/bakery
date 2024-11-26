import React, {createContext, PropsWithChildren, useContext, useState} from "react";

export interface UIContextProps {
    menuOpen: boolean;
    toggleMenu: (mode?: boolean) => void;
}

const UiContext = createContext<UIContextProps>({menuOpen: false, toggleMenu: (mode) => !mode});

export const useUi = () => {
    return useContext<UIContextProps>(UiContext);
};

export const UiProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [menuOpen, toggleMenu] = useState<boolean>(false);

    const toggleMenuHandler = (mode?: boolean) => {
        if(typeof  mode === "boolean"){
            toggleMenu(mode);
        }else{
            toggleMenu(prevState => !prevState);
        }
    }

    return (
        <UiContext.Provider value={{menuOpen, toggleMenu: toggleMenuHandler}}>
            {children}
        </UiContext.Provider>
    );
};