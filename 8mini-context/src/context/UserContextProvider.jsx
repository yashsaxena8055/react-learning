import React from "react";
import UserConetxt from "./UserContext";

export  const UserConetxtProvider = ({children}) =>{
   const [user,setUser] = React.useState(null);
    return (
 <>
   <UserConetxt.Provider value={{user,setUser}}>
   {children}
   </UserConetxt.Provider >
 </>

   );
}