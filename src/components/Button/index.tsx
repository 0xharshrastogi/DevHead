interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
  varient?: "grey" | "gradient1" | "gradient2";
}

const Button: React.FC<Props> = ({ children, varient, className, ...rest }) => {
  switch (varient) {
    case "grey":
      return (
        <button
          className={`btn rounded-md ease-in btn__grey ${className}`}
          {...rest}
        >
          {children}
        </button>
      );
    case "gradient1":
      return (
        <button
          className={`btn rounded-md ease-in btn__grad-1 ${className}`}
          {...rest}
        >
          {children}
        </button>
      );
    case "gradient2":
      return (
        <button
          className={`btn rounded-md ease-in btn__grad-2 ${className ?? ""}`}
          {...rest}
        >
          {children}
        </button>
      );
    default:
      return (
        <button className={className} {...rest}>
          {children}
        </button>
      );
  }
};

export default Button;
