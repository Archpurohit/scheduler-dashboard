import React, { Component } from "react";

class Panel extends Component {
  handleClick = () => {
  const { id, onSelect } = this.props;
  onSelect(id);
  };

  render() {
  const { label, value } = this.props;

  return (
    <section className="dashboard__panel" onClick={this.handleClick}>
      <h1 className="dashboard__panel-header">{label}</h1>
      <p className="dashboard__panel-value">{value}</p>
    </section>
  );

  }
}

export default Panel;