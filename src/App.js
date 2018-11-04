import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radio from '@govuk-react/radio';
import MultiChoice from '@govuk-react/multi-choice';
import * as Header from '@govuk-react/header'
import ErrorSummary from '@govuk-react/error-summary';
import InputField from '@govuk-react/input-field';

class App extends Component {
  render() {
    const description = "Some description";
    const errors = [
      {
        targetName: 'national-insurance-number',
        text: 'National Insurance number error',
      }
    ];
    return (
      <div className="App">
        
        <ErrorSummary 
          heading={'Some header'}
          description={description}
          errors={errors}
        />
        <InputField
          name="national-insurance-number"
          hint="It’s on your National Insurance card, benefit letter, payslip or P60."
        >
        National Insurance number
        </InputField>
      </div>
    );
  }
}

export default App;
