import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    // flexDirection: 'column',
    flexGrow: 1,
    // alignItems: 'flex-end',
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    // justifySelf: 'flex-end',
    // justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
    // justifyContent: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {},
});

interface Props {
  title: string;
  secondaryTitle: string;
  date: string;
  description: string;
}

const SectionItem: FunctionComponent<Props> = props => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.leftColumn}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`${props.title} `}</Text>
          <Text>{`– ${props.secondaryTitle}`}</Text>
        </View>
      </View>
      <View style={styles.rightColumn}>
        <Text>{props.date}</Text>
      </View>
    </View>
    <View>
      <Text>{props.description}</Text>
    </View>
  </View>
);

export default SectionItem;
