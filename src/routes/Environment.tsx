import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import { getEnvironment } from "../api/environment";
import { IEnvironment } from "../interfaces/environment";

export const loader: LoaderFunction = ({ params }) => {
  return getEnvironment(params.environment!);
};

export default function Environment() {
  const environment = useLoaderData() as IEnvironment;

  return (
    <>
      <h1>Environment - {environment.name}</h1>
      <Outlet />
    </>
  );
}
