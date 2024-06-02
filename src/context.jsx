import React,{useReducer} from "react";
import { createContext ,useContext} from "react";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./constant";
import { reducer } from "./reducer";

const AppContext=createContext();

const initialState={
 isSidebarOpen:false,

}


export const AppProvider=({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const openSidebar=()=>{
        dispatch({
            type:OPEN_SIDEBAR,
        })
    }

    const closeSidebar=()=>{
        dispatch({
            type:CLOSE_SIDEBAR,
        })
    }

    

    const contextValue={
     ...state,
      openSidebar,
      closeSidebar,
    }


    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}


export const useAppContext=()=>{
  return useContext(AppContext)
}