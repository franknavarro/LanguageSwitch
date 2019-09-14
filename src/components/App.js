import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
