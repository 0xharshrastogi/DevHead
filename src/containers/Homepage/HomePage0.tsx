import { Link } from "react-router-dom";
import Arthur from "../../assets/Aurthur.png";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";
import Sally10 from "../../assets/Saly-10.png";
import Sally13 from "../../assets/Saly-13.png";
import Sally12 from "../../assets/Saly-12.png";

const HomePageSm = ({ messageText }: { messageText: string }) => {
  return (
    <>
      <h3 className="my-5 text-center font-bold page_title max-h-full">
        DevHead
      </h3>
      <section className="hero sm:grid grid-cols-2">
        <section className="px-9 flex overflow-hidden mb-6 hero__greet">
          <img
            src={Arthur}
            alt="Authur Vector"
            className="max-w-xs w-3/5 object-center"
          />
          <h3 className="mt-5 font-bold flex-1 text-4xl">
            <span>Hello</span>
            <br />
            Folks!
          </h3>
        </section>
        <section className="hero__greet_message-gradient-bg">
          <p className="px-9 py-5">{messageText}</p>
        </section>
      </section>

      <div className="flex gap-5 my-10 px-9">
        <Link className="flex-1" to="/joinus">
          <Button className="text-white w-full" varient="gradient2">
            Join Us
          </Button>
        </Link>
        <Link className="flex-1" to="/events">
          <Button className="w-full" varient="grey">
            Events
          </Button>
        </Link>
      </div>

      <section className="px-9" data-role="section2">
        <div className="mt-5 text-center">
          <h2 className="font-bold text-2xl mb-5 mt-16 text-gray-700 ">
            How Your Club Works
          </h2>
          <span className="text-gray-400">
            Great things are done by a series of small things brought together.
          </span>
        </div>

        <section className="mt-7 space-y-8 flex flex-col items-center">
          <Card imageSrc={Sally10} cardTitle="lorem" />
          <Card imageSrc={Sally13} cardTitle="lorem" />
          <Card imageSrc={Sally12} cardTitle="lorem" />
        </section>
      </section>
    </>
  );
};

export default HomePageSm;
