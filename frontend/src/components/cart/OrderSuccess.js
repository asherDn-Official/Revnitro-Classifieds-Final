import MetaData from "../layouts/MetaData";
export default function OrderSuccess() {
  return (
    <div id="OrderPageMaindivpaddbis">
      <MetaData title={"Order Sucess"} />
      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            id="OrderSucrswssjImagwdf"
            className="my-5 img-fluid d-block mx-auto"
            src="/images/success.png"
            alt="Order Success"
            width="200"
            height="200"
          />

          <h2 id="oeddsucewsdhbjdghsd">
            Your Order has been placed successfully.
          </h2>

          <a href="/orders">Go to Orders</a>
        </div>
      </div>
    </div>
  );
}
