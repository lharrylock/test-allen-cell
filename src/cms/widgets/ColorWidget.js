import React from "react";
import './ColorWidget.scss';

const COLORS = [
  'white',
  'teal',
  'mint',
  'red',
  'dark-green',
];

export class ColorControl extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selected: this.props.value || COLORS[0]
    }
  }

  handleChange(e) {
    return () => {
      this.setState({selected: e});
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <div className="color-widget">
        <div className="colors">
          {COLORS.map(c => (
            <div
              key={c}
              className={`color-square ${c} ${this.state.selected === c ? 'selected' : ''}`}
              onClick={this.handleChange(c)}
            />
          ))}
        </div>
      </div>
    );
  }
}
