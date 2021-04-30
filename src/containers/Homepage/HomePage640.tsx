import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Arthur from "../../assets/Aurthur.png";

const HomePageMd = ({ messageText }: { messageText: string }) => {
  return (
    <>
      <section className="min-h-screen grid place-items-center">
        <section className="px-9 md:px-16 lg:px-20 grid grid-cols-2 hero">
          <section className="flex justify-center items-center overflow-hidden hero__greet">
            <img src={Arthur} alt="Authur Vector" className="object-center" />
          </section>

          <section className="flex flex-col justify-center hero__greet_message">
            <h3 className="font-bold text-3xl md:text-4xl">
              <span>Hello</span> Folks!
            </h3>
            <p className="md:mb-10 md:mt-6">{messageText}</p>

            <div className="self-start space-x-4 lg:space-x-8">
              <Link to="/joinus">
                <Button varient="gradient1">Join Us</Button>
              </Link>

              <Link to="/events">
                <Button varient="grey">Events</Button>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
export default HomePageMd;
