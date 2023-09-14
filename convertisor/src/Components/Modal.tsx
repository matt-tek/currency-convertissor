import React, { ReactElement, useRef } from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Modal, FlatList, View, Button } from 'react-native';
import currency from '../Utils/constant';
import { CurrencyType, ModalProps } from "../Utils/interface";

const CurrencyMenu: React.FC<ModalProps> = ({ onSelect }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState({});
    const str = "toto";

    const onItemPress = (item: CurrencyType): void => {
      setSelected(item);
      setModalVisible(!modalVisible);
      onSelect(item);
    }

    const renderItem = ({ item }: any): ReactElement<any, any>  => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
          <Text>{item.currency}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
          <Button title="test" onPress={() => setModalVisible(!modalVisible)} />
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}
              >
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{alignSelf: 'center', position: 'absolute', justifyContent: "center"}}>
                <FlatList
                  data={currency}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
    // button: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   backgroundColor: 'red',
    //   height: 50,
    //   zIndex: 1,
    // },
    buttonText: {
      flex: 1,
      textAlign: 'center',
    },
    icon: {
      marginRight: 10,
    },
    dropdown: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: '50%',
      shadowColor: '#000000',
      shadowRadius: 4,
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 0.5,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
    // item: {
    //   paddingHorizontal: 10,
    //   paddingVertical: 10,
    //   borderBottomWidth: 1,
    // },
});

export default CurrencyMenu;