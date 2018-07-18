import React, { Component } from "react";
import PropTypes from "prop-types";

class Circle extends Component {
  constructor(props) {
    super(props);
  }

  // инициализация
  componentWillMount() {}

  componentDidMount() {}

  // обновление
  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  // удаление
  componentWillUnmount() {}

  render() {
    return <div />;
  }
}

Circle.propTypes = {};

export default Circle;
