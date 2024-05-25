import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export function useTaskContext() {
    return useContext(TaskContext);
  }