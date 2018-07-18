import React, { Component } from "react";

export default OrComp =>
  class Accordeon extends Component {
    state = {
      openArtId: null
    };

    render() {
      return (
        <OrComp
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openArtId={this.state.openArtId}
        />
      );
    }

    toggleOpenItem = openArtId => ev => {
      this.setState({
        openArtId: openArtId === this.state.openArtId ? null : openArtId
      });
    };
  };
