import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { Submit } from '../words';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = Submit[this.context];

    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
