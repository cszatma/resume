import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

import SectionItem from '../components/SectionItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 12,
  },
  itemContainer: {
    marginBottom: 5,
  },
  titleContainer: {
    flexDirection: 'column',
  },
});

const items = [
  {
    title: 'Developer',
    secondaryTitle: 'Orange Gate',
    date: 'September 2018 - November 2018',
    description:
      'Developed applications for robots in the Development Studio using Java, Kotlin and Android Studio. Helped create and implement development processes. Trained team on how to use Git and Github.',
  },
  {
    title: 'Computer Science Research Associate',
    secondaryTitle: 'Orange Gate',
    date: 'May 2018 - August 2018',
    description:
      'Developed chatbot prototypes using Microsoft Azure and Amazon Lex to explore potential use cases. Implemented processes in the Innovation Lab to improve project planning and documentation. Developed a web application using React that generates backgrounds for videos to assist the Design Studio.',
  },
];

const Experience: FunctionComponent = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text>EXPERIENCE</Text>
    </View>
    <View>
      {items.map(item => (
        <SectionItem
          key={item.title + item.secondaryTitle}
          title={item.title}
          secondaryTitle={item.secondaryTitle}
          date={item.date}
          description={item.description}
        />
      ))}
    </View>
  </View>
);

export default Experience;
