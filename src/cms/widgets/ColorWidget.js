import React from "react";

const COLORS = [
  {name: 'white', value: '#FFFDF4'},
  {name: 'teal', value: '#257D92'},
  {name: 'mint', value: '#B2D6CC'},
  {name: 'red', value: '#E06769'},
  {name: 'dark-green', value: '#799A8E'},
];

export class ColorControl extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getColorSquareStyle = this.getColorSquareStyle.bind(this);
    this.getNoneColorSquareStyle = this.getNoneColorSquareStyle.bind(this);
    this.state = {
      selected: this.props.value || null,
      hovered: null
    }
  }

  handleChange(e) {
    return () => {
      this.setState({selected: e});
      this.props.onChange(e);
    }
  };

  getColorSquareStyle(color) {
    const selected = this.state.selected === color.name ? STYLES.colorSquareSelected : {};
    const hovered = this.state.hovered === color.name ? STYLES.colorSquareHover : {};
    return {
      ...STYLES.colorSquare,
      backgroundColor: color.value,
      ...selected,
      ...hovered
    };
  }

  getNoneColorSquareStyle() {
    const selected = !this.state.selected ? STYLES.colorSquareNoneSelected : {};
    const hovered = this.state.hovered === 'none' ? STYLES.colorSquareHover : {};
    return {
      ...STYLES.colorSquare,
      ...STYLES.colorSquareNone,
      ...selected,
      ...hovered
    }
  }

  render() {
    const lineSelected = !this.state.selected ? STYLES.colorSquareNoneSelectedLine : {};
    const lineStyle = {
      ...STYLES.colorSquareNoneLine,
      ...lineSelected
    };
    return (
      <div style={STYLES.colorWidget}>
        <div className="colors">
          {COLORS.map(c => (
            <div
              key={c.name}
              style={this.getColorSquareStyle(c)}
              onClick={this.handleChange(c.name)}
              onMouseEnter={() => this.setState({hovered: c.name})}
              onMouseLeave={() => this.setState({hovered: null})}
            />
          ))}
          <div
            style={this.getNoneColorSquareStyle()}
            onClick={this.handleChange(null)}
            onMouseEnter={() => this.setState({hovered: 'none'})}
            onMouseLeave={() => this.setState({hovered: null})}
          >
            <div style={lineStyle}/>
          </div>
        </div>
      </div>
    );
  }
}

const STYLES = {
  colorWidget: {
    padding: '1em',
    border: '2px solid #dfdfe3'
  },
  colorSquare: {
    height: 24,
    width: 24,
    display: 'inline-block'
  },
  colorSquareSelected: {
    border: '2px solid #3a69c7'
  },
  colorSquareHover: {
    cursor: 'pointer'
  },
  colorSquareNone: {
    border: '2px solid #dfdfe3'
  },
  colorSquareNoneSelected: {
    border: '2px solid #3a69c7'
  },
  colorSquareNoneSelectedLine: {
    borderBottom: '2px solid #3a69c7'
  },
  colorSquareNoneLine: {
    borderBottom: '2px solid #dfdfe3',
    height: 24,
    width: 30,
    transform: 'translateY(-11px) translateX(3px) rotate(45deg)'
  },

};