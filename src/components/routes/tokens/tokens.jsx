import Chart from "./chart";

const Tokens = () => {
  return (
    <section className="page-section" id="token-chart">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <h1 className="display-4 mt-5">Tokens Distribution</h1>
            <hr className="divider divider-dark" />
            <div className="my-5">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokens;
