import { useContext } from "react";
import { UserContext } from "../context/userContext";

  export function useUserContext() {
    return useContext(UserContext);
    
  }