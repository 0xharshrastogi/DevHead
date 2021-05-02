import { Switch, Route } from "react-router-dom";
import NavbarSmall from "../components/NavbarSmall/NavbarSmall";
import NavbarMedium from "../components/NavbarMedium/NavbarMedium";
import Connect from "./Connect/Event";
import Events from "./Events/Events";
import Projects from "./Projects/Projects";
import JoinUs from "./JoinUs/JoinUs";
import HomePage from "./Homepage/index";
import useViewportWidth from "../hooks/useViewportWidth";
import { WindowContext } from "../context/index";
import Footer from "../components/Footer/Footer";

const App = () => {
  const viewportWidth = useViewportWidth();

  return (
    <>
      <WindowContext.Provider value={viewportWidth}>
        {viewportWidth < 640 ? <NavbarSmall /> : <NavbarMedium />}
        <Switch>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/joinus">
            <JoinUs />
          </Route>
          <Route path="">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </WindowContext.Provider>
    </>
  );
};

export default App;
