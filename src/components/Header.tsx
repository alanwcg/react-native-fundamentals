import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

interface HeaderProps {
  darkTheme: boolean;
}

export function Header({ darkTheme }: HeaderProps) {
  return (
    <View 
      style={
        darkTheme 
        ? [styles.header, { backgroundColor: '#191932'}]
        : styles.header
      }
    >
      <Text 
        style={
          darkTheme
          ? [styles.headerText, { color: '#E1E1E6' }]
          : styles.headerText
        }
      >
        to.
      </Text>
      <Text 
        style={
          darkTheme
          ? [styles.headerText, { color: '#E1E1E6', fontFamily: 'Poppins-SemiBold' }]
          : [styles.headerText, { fontFamily: 'Poppins-SemiBold' }]
        }
      >
        do
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
});
