import { Outlet, Link } from "react-router-dom";

import "../main.css";

const Root = ({ routes }) => {
  return (
    <>
      <header>
        <h1>Motion sandbox</h1>
      </header>
      <div className="mainContainer">
        <nav>
          <ul>
            {routes.map((route, i) => {
              return (
                <li key={i}>
                  <Link to={route.path}>{`${route.label}`}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <section className="mainContent">
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default Root;
