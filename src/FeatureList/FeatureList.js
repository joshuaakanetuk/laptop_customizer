import React from 'react';
import FeatureOptions from '../FeatureOptions/FeatureOptions'

class FeatureList extends React.Component {
  static defaultProps = {
    selected: [],
    features: {},
    USCurrencyFormat: function (value){return value}
  };
  render() {
    console.log(this.props.features)
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeatureOptions 
          updateFeature={this.props.updateFeature}
          selected={this.props.selected} 
          featureName={feature} 
          feature={this.props.features[feature]} />
        </fieldset>

      )
    })

    return (
      features
    );
  }
}

export default FeatureList;