import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Modal,Pressable} from 'react-native';
import React, {useState} from 'react';
export default function App() {
  const [ModalOpen, setModal] = useState(false);
  return (
    <View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={ModalOpen}
        onRequestClose={()=>setModal(!ModalOpen)}
    >
    <View style={styles.container}>
      <Text style={styles.Message}>This is a Modal</Text>
      <Pressable onPress={()=>setModal(!ModalOpen)}>
              <Text style={styles.HideButton}>Hide Modal</Text>
    </Pressable>
      <StatusBar style="auto" />
    </View>
    </Modal>
    <View style={styles.ButtonContainer}>
    <Pressable onPress={()=>setModal(!ModalOpen)}>
    <Text style={styles.Button}>Show Modal</Text>
    </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'orange',
  },
  HideButton: {
    width: 100,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
  },
  ButtonContainer: {
  alignContent: 'center',
  top: 100,
  },
  Message: {
  height:20,
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'gray',
  bottom: 20,
  color: 'white'
  }
});
