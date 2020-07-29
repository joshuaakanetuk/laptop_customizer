import React from 'react'
import FeatureList from '../FeatureList/FeatureList'


class FeatureForm extends React.Component {
    static defaultProps = {
        selected: [],
        features: {},
        USCurrencyFormat: function (value){return value}
      };
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureList selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                    features={this.props.features} />
            </form>
        )
    }
}

export default FeatureForm;