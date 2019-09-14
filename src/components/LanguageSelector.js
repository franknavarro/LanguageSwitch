import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { SelectLang } from '../language';
import SupportedLanguages, { Flags } from '../language';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  renderFlags = () => {
    return SupportedLanguages.map(language => {
      return (
        <i
          className={`flag ${Flags[language]}`}
          key={language}
          onClick={() => this.context.onLanguageChange(language)}
        />
      );
    });
  };

  render() {
    return (
      <div style={{ float: 'right' }}>
        {SelectLang[this.context.language]}:{this.renderFlags()}
      </div>
    );
  }
}

export default LanguageSelector;
