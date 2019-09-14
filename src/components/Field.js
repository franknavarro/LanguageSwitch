import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { Name } from '../words';

class Field extends Component {
  static contextType = LanguageContext;
  render() {
    const name = Name[this.context.language];
    return (
      <div className="ui field">
        <label>{name}</label>
        <input />
      </div>
    );
  }
}

export default Field;
