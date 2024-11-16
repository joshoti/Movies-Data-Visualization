import { Navigate } from "react-router-dom";

export function RedirectToHome() {
  return <Navigate to={"/analysis"}></Navigate>;
}
