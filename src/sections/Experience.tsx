import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 12,
  },
  itemContainer: {
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
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  description: {},
});

const ExperienceItem: FunctionComponent = () => (
  <View style={styles.itemContainer}>
    <View style={styles.headerContainer}>
      <View style={styles.leftColumn}>
        <Text>Developer - Orange Gate</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text>September 2018 - November 2018</Text>
      </View>
    </View>
    <View style={styles.description}>
      <Text>
        Developed applications for robots in the Development Studio using Java,
        Kotlin and Android Studio. Helped create and implement development
        processes. Trained team on how to use Git and Github.
      </Text>
    </View>
  </View>
);

const Experience: FunctionComponent = () => (
  <View style={styles.container}>
    <ExperienceItem />
    <ExperienceItem />
  </View>
);

export default Experience;
