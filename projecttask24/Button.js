import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button 
				className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props}>
				Refresh
			</button>
		); // we export the button class .we used ternary operation if button is light or dark,now onclicking we would pass this.props.
	}
}