// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class UserAccount extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          User Account
        </h1>
      </div>
    );
  }
}

export default UserAccount;
