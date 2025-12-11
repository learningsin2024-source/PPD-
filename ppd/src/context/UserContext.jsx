import { createContext, useState } from "react";


export const UserContext = createContext();


export function UserProvider ({children}) {
    const [user, setUser] = useState({
        username : "",
        email : "",
        avatar : "", 
        createdAt : "", 
    })


    return (

          <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
    

}

