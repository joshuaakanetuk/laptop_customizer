import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureOptions extends React.Component {
    
  render() {
    const options = this.props.feature.map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      console.log(this.props.feature, this)
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.featureName)}
            checked={item.name === this.props.selected[this.props.featureName].name}
            onChange={e => this.props.updateFeature(this.props.featureName, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    })
    return (
      options
    )
  }
}

export default FeatureOptions;