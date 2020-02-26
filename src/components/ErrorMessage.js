import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ errorMessage }) {
  return <h2 className="ErrorMessage">{errorMessage}</h2>;
}

export default ErrorMessage;
