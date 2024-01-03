import React, { Fragment } from "react";
import RootRoutes from "./RootRoutes";
import Header from "./common/Header";

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  return (
    <Fragment>
      <Header />
      <RootRoutes />
    </Fragment>
  );
}

export default App;
