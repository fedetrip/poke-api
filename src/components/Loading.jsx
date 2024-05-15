import "../css/Loading.css";

export const Loading = () => {
  return (
    <div className="loading">
      <div className="half-circle-spinner">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </div>
  );
};
