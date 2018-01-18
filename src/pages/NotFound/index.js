// src/components/NotFound/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1>
          404 Not Found :(
          <p><i><small>you broke the internet</small></i></p>
        </h1>
      </div>
    );
  }
}
