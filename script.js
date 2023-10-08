class CurrencyConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rate: 1228.83,
        GBP: 1,
        NGN: 1 * 1228.83,
      };
  
      this.handleGBPChange = this.handleGBPChange.bind(this);
      this.handleNGNChange = this.handleNGNChange.bind(this);
    }
  
    toGBP(amount, rate) {
      return amount * (1 / rate);
    }
  
    toNGN(amount, rate) {
      return amount * rate;
    }
  
    convert(amount, rate, equation) {
      console.log(typeof amount);
      const input = parseFloat(amount);
      if (Number.isNaN(input)) {
        return '';
      }
      return equation(input, rate).toFixed(3);
    }
  
    handleGBPChange(event) {
      const NGN = this.convert(event.target.value, this.state.rate, this.toNGN);
      this.setState({
        GBP: event.target.value,
        NGN
      });
    }
  
    handleNGNChange(event) {
      const GBP = this.convert(event.target.value, this.state.rate, this.toGBP);
      this.setState({
        NGN: event.target.value,
        GBP
      });
    }
  
    render() {
      const { rate, GBP, NGN } = this.state;
  
      return (
        <div className="container">
          <div className="text-center p-3 mb-2">
            <h2 className="mb-2">Currency Converter</h2>
            <h4>GBP 1 : {rate} NGN</h4>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <span className="mr-1">GBP</span>
              <input value={GBP} onChange={this.handleGBPChange} type="number" />
              <span className="mx-3">=</span>
              <input value={NGN} onChange={this.handleNGNChange} type="number" />
              <span className="ml-1">NGN</span>
            </div>
          </div>
        </div>
      )
    }
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<CurrencyConverter />);