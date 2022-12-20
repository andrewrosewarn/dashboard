import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getDashboard } from "../api/dashboard";
import { IDashboard } from "../interfaces/dashboard";

export const loader: LoaderFunction = ({ params }) => {
  return getDashboard(params.dashboard!);
};

export default function Dashboard() {
  const dashboard = useLoaderData() as IDashboard;

  return <h2>Dashboard - {dashboard.name}</h2>;
}
