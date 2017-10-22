import React, { Component } from 'react';

import { Document, Text, render } from '../src';

class App extends Component {
  render () {
    return (
      <Document>
        <Text>Congrats! You've successfully completed the tutorial. I'm excited to see what you build \n Check your folder for "text.docx" document </Text>
      </Document>
    );
  }
}

// This will create a file 'text.docx' in the current directory!
render(<App />, `${__dirname}/text.docx`);
