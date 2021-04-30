import { useContext } from "react";
import { WindowContext } from "../../context";
import HomePageSm from "./HomePage0";
import HomePageMd from "./HomePage640";

const MESSAGETEXT = `The DevHead provides participating students an opportunity to learn
the basics of computer programming in a team setting. The
club's main focus is on creating applications, websites, games,
stem/steam workshops, and other projects to share with LCC and the
community`;

const Homepage = () => {
  const viewportWidth = useContext(WindowContext);

  return (
    <>
      {viewportWidth < 640 && <HomePageSm messageText={MESSAGETEXT} />}
      {viewportWidth >= 640 && <HomePageMd messageText={MESSAGETEXT} />}
    </>
  );
};

export default Homepage;
