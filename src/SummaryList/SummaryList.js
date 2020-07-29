import React from 'react'
import SummaryItem from '../SummaryItem/SummaryItem'

class SummaryList extends React.Component{
    static defaultProps = {
        selected: [],
        features: {},
        USCurrencyFormat: function (value){return value}
    };
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <SummaryItem
                    key={idx}
                    featureHash={featureHash}
                    selectedOption={this.props.selected[feature]}
                    featureName={feature}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    />
                    
            )
          });

        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        )
    }
}

export default SummaryList;