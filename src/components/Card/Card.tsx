interface Props {
  imageSrc: string;
  cardTitle: string;
  className?: string;
}
// const shadow = `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`;
// const boxShadow = `var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 0 #0000`;

const Card = (props: Props) => {
  const { imageSrc, cardTitle } = props;

  return (
    <div
      style={{ minWidth: "250px" }}
      className="border-2 bg-white transition-shadow border-gray-50 rounded-lg p-2 w-full max-w-xs card"
    >
      <div className="card__image_wrapper">
        <img src={imageSrc} alt={cardTitle} className="mx-auto card__image" />
      </div>
      <span className="inline-block my-3 w-full text-center font-medium capitalize text-xl text-gray-500 card__title">
        {cardTitle}
      </span>
    </div>
  );
};

export default Card;
