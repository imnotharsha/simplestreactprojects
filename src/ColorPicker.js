import React from 'react';
import invert from 'invert-color';
class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      color: localStorage.getItem('color'),
    };
  }
  handleChange = e => {
    const color = e.target.value;
    this.setState({color});
    console.log(this.state.color);
  };

  handleSave = e => {
    e.preventDefault();
    localStorage.setItem('color', this.state.color);
  };
  render() {
    return (
      <div
        style={{
          align: 'center',
          backgroundColor: this.state.color,
          width: '100%',
          height: '900px',
        }}>
        <form
          style={{align: 'center'}}
          onSubmit={this.handleSave}
          align='center'>
          <label>
            <h3 align='center' color={invert(this.state.color)}>
              Color
            </h3>
          </label>
          <input
            type='color'
            onChange={this.handleChange}
            value={this.state.color}
          />
          <br />
          <input type='submit' value='save' />
        </form>
      </div>
    );
  }
}
export default ColorPicker;
