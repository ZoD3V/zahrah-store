const Wrapper = ({ children, className }) => {
  return (
    <div className={`container px-5 md:px-10 mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
