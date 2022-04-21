import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

import "./Checkout.extension.style.scss";

class Checkout extends SourceCheckout {
  constructor(props) {
    super(props);
  }

  renderStepsBar = () => {
    const selector = document.querySelector(".Checkout");

    let bar = document.createElement("div");
    bar.classList.add("Checkout__bar__container");

    let progressLine = document.createElement("div");
    progressLine.classList.add("Checkout__bar__progressLine");

    let firstPoint = document.createElement("div");
    firstPoint.classList.add("Checkout__bar__firstPoint");

    let secondPoint = document.createElement("div");
    secondPoint.classList.add("Checkout__bar__secondPoint");

    bar.appendChild(progressLine);
    bar.appendChild(firstPoint);
    bar.appendChild(secondPoint);

    console.log(selector);
    selector.appendChild(bar);
    return selector;
  };

  componentDidMount() {
    this.renderStepsBar();
    console.log(this.props.checkoutStep);
    console.log(this.stepMap);
  }
}

export default Checkout;
