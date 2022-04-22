import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import { ContentWrapper as SourceContentWrapper } from "SourceComponent/ContentWrapper/ContentWrapper.component";

import "./Checkout.extension.style.scss";

class Checkout extends SourceCheckout {
  constructor(props) {
    super(props);
  }

  renderStepsBar = () => {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
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

  render() {
    return (
      <main block="Checkout">
        {this.renderStepsBar()}
        <SourceContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </SourceContentWrapper>
      </main>
    );
  }
}

export default Checkout;
