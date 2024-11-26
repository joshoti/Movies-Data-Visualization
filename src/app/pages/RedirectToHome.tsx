import { Navigate } from "react-router-dom";

export function RedirectToAnalysis() {
  return <Navigate to={"/analysis"}></Navigate>;
}
