import "./Clock.css";
import type { Product } from "../contracts/product";

function Clock(props: { clock: Product }) {
  var formatter = new Intl.NumberFormat("se-SE", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <div className="clock">
      <img src={props.clock.images[0].src} alt={props.clock.description} />
      <div
        className="colorBadge"
        style={{
          backgroundColor:
            props.clock.color.id === "Rose Gold"
              ? "#b76e79"
              : props.clock.color.id,
        }}
      ></div>
      <br />
      {props.clock.name}
      <br />
      <span className="colorName">{props.clock.color.id}</span>
      <br />
      {formatter.format(Number(props.clock.price.amount))}
    </div>
  );
}

export default Clock;
