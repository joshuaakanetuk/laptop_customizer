import React from 'react'


class SummaryItem extends React.Component{
    static defaultProps = {
        selected: [],
        features: {},
        USCurrencyFormat: function (value){return value}
      };
    render() {
        return(
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.featureName} </div>
                <div className="summary__option__value">{this.props.selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.USCurrencyFormat.format(this.props.selectedOption.cost)}
                </div>
              </div>
        )
    }
}

export default SummaryItem;