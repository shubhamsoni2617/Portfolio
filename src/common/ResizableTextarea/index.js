import React from "react";
import "./style.scss";

class ResizableTextarea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //   value: "",
      rows: 5,
      minRows: 5,
      maxRows: 10,
    };
  }

  handleChange = (event) => {
    const textareaLineHeight = 24;
    const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.props.setValue(event.target.value);
    this.setState({
      //   value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };

  render() {
    return (
      <textarea
        style={this.props.style}
        rows={this.state.rows}
        value={this.props.value}
        placeholder={"Enter your text here..."}
        className={`textarea ${this.props.className}`}
        onChange={this.handleChange}
      />
    );
  }
}

export default ResizableTextarea;
