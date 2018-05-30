import React, { Component } from "react";

export default OrCompToggl =>
  class Toggle extends Component {
    render() {
      return (
        <OrCompToggl
          {...this.props}
          toggleOpen={this.toggleOpen}
          isOpen={this.state.isOpen}
        />
      );
    }
  };
