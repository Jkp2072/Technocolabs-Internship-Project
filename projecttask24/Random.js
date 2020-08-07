import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

class Random extends React.Component {
  constructor(props){
    super(props);
    this.state={color :[23,57,153]};
                                                      // passing props in the class.also the 3 colors represent rgb shades.
    this.handleClick = this.handleClick.bind(this);   // as we are using this.function later on so we are binding function to this.
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  handleClick(){
    this.setState({color : this.chooseColor()});
  } // here handle click is function which will set the colr on clicking selected by choosecolor function.

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          your color is {this.formatColor(this.state.color)} 
        </h1>
        <Button  light={this.islight()} onClick={handleClick()}/>
      </div>
    );
  } // here we used the imported class button from the button.js also intially the button is light as we are passing argument light. Also on onclick event of button 
  // we are passing handleclick function to change the color to random color.
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);