import React from "react";
import {useState,useContext } from "react";


const PaginationContext = React.createContext();

export default function PaginationContextProvider({children}) {
      const [pageNum,setPageNum]=useState(1);
      const [pageSize,setPageSize]=useState(4); 
      const values={pageNum,setPageNum,pageSize,setPageSize};
    return(
        <PaginationContext.Provider value={values}>
            {children}
        </PaginationContext.Provider>
    )
}

export const usePaginationContext = () => {
    return React.useContext(PaginationContext);
}