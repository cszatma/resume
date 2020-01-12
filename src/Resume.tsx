import React, { FunctionComponent } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import Experience from './sections/Experience';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Open Sans',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Resume: FunctionComponent = () => (
  <Document>
    <Page size="LEGAL" style={styles.page}>
      {/* <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
      <Experience />
    </Page>
  </Document>
);

export default Resume;
