import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { INavigation } from "../interfaces/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const navigation = useLoaderData() as INavigation[];

  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      {navigation.map((navItem) => (
        <React.Fragment key={navItem.environment.id}>
          <Link to={navItem.environment.id}>{navItem.environment.name}</Link>
          <ul>
            {navItem.dashboards.map((dashboard) => (
              <li key={dashboard.id}>
                <Link to={`${navItem.environment.id}/${dashboard.id}`}>{dashboard.name}</Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </nav>
  );
}
