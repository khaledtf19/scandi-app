import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

import "./Checkout.extension.style.scss";

class Checkout extends SourceCheckout {
  constructor(props) {
    super(props);
  }

  renderStepsBar = () => {
    const selector = document.querySelector(".Checkout");

    const steps = Object.keys(this.stepMap);

    let bar = document.createElement("div");
    bar.classList.add("Checkout__bar__container");

    let progressLine1 = document.createElement("div");
    progressLine1.classList.add("Checkout__bar__progressLine", "progressLine1");

    let firstPoint = document.createElement("div");
    firstPoint.classList.add("Checkout__bar__firstPoint");

    let progressLine2 = document.createElement("div");
    progressLine2.classList.add("Checkout__bar__progressLine", "progressLine2");

    let secondPoint = document.createElement("div");
    secondPoint.classList.add("Checkout__bar__secondPoint");

    let progressLine3 = document.createElement("div");
    progressLine3.classList.add("Checkout__bar__progressLine", "progressLine3");

    let firstPontP = document.createElement("p");
    firstPontP.append("firstPoint");
    firstPoint.appendChild(firstPontP);

    let secondPointP = document.createElement("p");
    secondPointP.append("secondPoint");
    secondPoint.appendChild(secondPointP);

    bar.appendChild(progressLine1);
    bar.appendChild(progressLine2);
    bar.appendChild(progressLine3);

    bar.appendChild(firstPoint);
    bar.appendChild(secondPoint);

    selector.appendChild(bar);
    return selector;
  };

  componentDidMount() {
    this.renderStepsBar();
    console.log(this.props.checkoutStep);
    console.log(this.stepMap);
  }

  componentDidUpdate(prevProp) {
    if (prevProp.checkoutStep !== this.props.checkoutStep) {
    }
  }
}

export default Checkout;
