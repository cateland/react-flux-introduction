var React = require('react');
require('./button.css');

var Button = React.createClass({

	render: function() {
		var cssClass = this.props.primary ? 'button button-primary' : 'button';
		return (
			<button {...this.props} className={cssClass}>
				{this.props.children}
			</button>
		);
	}

});

module.exports = Button;