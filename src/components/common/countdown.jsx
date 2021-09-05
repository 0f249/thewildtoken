const Countdown = () => {
  return (
    <div className="row gx-5 py-4 align-items-center justify-content-center bg-transparent shadow rounded-3">
      <div className="col-auto" id="clockdiv">
        <div className="mb-2 p-2">
          <h1 className="m-0 p-0 display-1 fw-normal text-center">
            Pre sale starts in
          </h1>
        </div>
        <div className="clock-subdiv mb-2 p-2">
          <span className="days"></span>
          <div className="smalltext">Days</div>
        </div>
        <div className="clock-subdiv mb-2 p-2">
          <span className="hours"></span>
          <div className="smalltext">Hours</div>
        </div>
        <div className="clock-subdiv mb-2 p-2">
          <span className="minutes"></span>
          <div className="smalltext">Minutes</div>
        </div>
        <div className="clock-subdiv mb-2 p-2">
          <span className="seconds"></span>
          <div className="smalltext">Seconds</div>
        </div>
        <a
          className="btn d-block mt-3 btn-outline-light btn-lg px-4"
          href="pre-sale"
        >
          <i className="bi bi-cart-fill"></i> Buy now
        </a>
      </div>
    </div>
  );
};

export default Countdown;
