import "./CardLoader.css";

const CardLoader = () => {
  return (
    <div className="card is-loading">
      <div className="image"></div>
      <div className="content">
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
};

export const CardLoaderContainer = (props: { count: number }) => {
  return (
    <>
      {Array.from({ length: props.count }, (_, index) => (
        <CardLoader key={index} />
      ))}
    </>
  );
};
