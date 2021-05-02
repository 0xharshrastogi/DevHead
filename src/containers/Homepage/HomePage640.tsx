import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Button from "../../components/Button";
import Sally10 from "../../assets/Saly-10.png";
import Sally13 from "../../assets/Saly-13.png";
import Sally12 from "../../assets/Saly-12.png";
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

      <section
        style={{
          background:
            "linear-gradient(266.51deg, #70FFAE -6.56%, #0540F2 56.71%, #0FF2F2 110.25%)",
          backgroundBlendMode: "darken",
        }}
        className="min-h-screen grid place-items-center bg-gradient-to-r from-blue-500 to-green-400 text-white"
      >
        <div className="flex flex-col gap-7">
          <div className="mb-16">
            <div className="text-center">
              <h2 className="font-bold text-7xl">How Our Club Works</h2>
              <span className="text-xl opacity-40">
                Great things are done by a series of small things brought
                together
              </span>
            </div>
          </div>
          <section className="flex gap-10">
            <Card imageSrc={Sally10} cardTitle="Enthusiastic People" />
            <Card imageSrc={Sally13} cardTitle="Local Support" />
            <Card imageSrc={Sally12} cardTitle="Free Resource" />
          </section>
        </div>
      </section>
    </>
  );
};
export default HomePageMd;
