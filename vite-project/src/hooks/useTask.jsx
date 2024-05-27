import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export const useTask = () => {
    return useContext(TaskContext);
  }