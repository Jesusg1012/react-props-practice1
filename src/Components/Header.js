import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
      <h1>bed</h1>
      <img src={this.props.imgURL} />
      </div>
    );
  }
}

export default Header;
