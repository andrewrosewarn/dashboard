import { useRouteError } from "react-router-dom";

export default function EnvironmentError() {
  const error = useRouteError();

  console.log(error);
  return <h2>Test</h2>;
}
