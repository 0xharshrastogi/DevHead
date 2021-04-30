import PropTypes from "prop-types";
import Arthur from "../../assets/Aurthur.png";

const HomePageSm = ({ messageText }: { messageText: string }) => {
  return (
    <>
      <h3 className="my-5 text-center font-bold page_title">DevHead</h3>
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
    </>
  );
};

HomePageSm.propTypes = {
  messageText: PropTypes.string.isRequired,
};

export default HomePageSm;
