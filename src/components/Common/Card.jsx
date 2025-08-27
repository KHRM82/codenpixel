const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`card-glass rounded-xl p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
