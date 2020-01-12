import React from 'react';
import { render } from 'react-snapshot';
import { Font, PDFViewer } from '@react-pdf/renderer';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Resume from './Resume';
import openSansBold from './fonts/OpenSans-Bold.ttf';
import openSans from './fonts/OpenSans-Regular.ttf';

Font.register({
  family: 'Open Sans',
  fonts: [{ src: openSansBold, fontWeight: 'bold' }, { src: openSans }],
});

const App = () => (
  <PDFViewer style={{ width: '100vw', height: '100vh' }}>
    <Resume />
  </PDFViewer>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
