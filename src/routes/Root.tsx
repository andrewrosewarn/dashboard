import { LoaderFunction, Outlet } from "react-router-dom";
import { getNavigation } from "../api/navigation";
import Body from "../components/Body";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export const loader: LoaderFunction = async () => {
  return getNavigation();
};

export default function Root() {
  return (
    <>
      <Header />
      <Navigation />
      <Body>
        <Outlet />
      </Body>
    </>
  );
}
