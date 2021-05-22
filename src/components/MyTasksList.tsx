import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface FlatListHeaderComponentProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

function FlatListHeaderComponent({
  darkTheme,
  toggleTheme,
}: FlatListHeaderComponentProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={
        darkTheme
          ? [styles.header, { color: '#565BFF' }]
          : styles.header}
      >
        Minhas tasks
      </Text>
      <TouchableOpacity
        style={
          darkTheme
            ? [styles.headerButton, { backgroundColor: '#FFF' }]
            : styles.headerButton}
        activeOpacity={0.7}
        onPress={toggleTheme}
      >
        <Text style={
          darkTheme
            ? [styles.buttonText, { color: '#565BFF' }]
            : styles.buttonText}
        >
          {darkTheme ? 'Tema Claro' : 'Tema Escuro'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

interface MyTasksListProps {
  darkTheme: boolean;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  toggleTheme: () => void;
}

export function MyTasksList({
  darkTheme,
  tasks,
  onLongPress,
  onPress,
  toggleTheme,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <>
            {item.done ? (
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={
                  darkTheme
                  ? [styles.taskButtonDone, { backgroundColor: '#212136' }]
                  : styles.taskButtonDone
                }
                onPress={() => onPress(item.id)}
                onLongPress={() => onLongPress(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  style={
                    darkTheme
                    ? [styles.taskMarkerDone, { backgroundColor: '#565BFF' }]
                    : styles.taskMarkerDone
                  }
                />
                <Text
                  style={
                    darkTheme
                    ? [styles.taskTextDone, { color: '#E1E1E6A2' }]
                    : styles.taskTextDone
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => onPress(item.id)}
                onLongPress={() => onLongPress(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  style={
                    darkTheme
                    ? [styles.taskMarker, { borderColor: '#565BFF' }]
                    : styles.taskMarker
                  }
                />
                <Text
                  style={
                    darkTheme
                    ? [styles.taskText, { color: '#E1E1E6' }]
                    : styles.taskText
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          </>
        )
      }}
      ListHeaderComponent={
        <FlatListHeaderComponent
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
      }
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerButton: {
    backgroundColor: '#273FAD',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
})