import React, { ReactElement, useRef } from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import { DropdownProps } from "../Utils/interface";
import currency from '../Utils/constant';

const DropdownMenu: React.FC<DropdownProps> = ({ label, data, onSelect }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState({});
    const [dropdownTop, setDropdownTop] = useState(0);

    const toggleDropdown = (): void => {
      visible ? setVisible(false) : openDropdown();
    };
  
    const openDropdown = (): void => {
      DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        setDropdownTop(py + h);
      });
      setVisible(true);
    };
  
    const onItemPress = (item): void => {
      setSelected(item);
      onSelect(item);
      setVisible(false);
    };
  
    const renderItem = ({ item }): ReactElement<any, any> => (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text>{item.currency}</Text>
      </TouchableOpacity>
    );

    const renderDropdown = (): ReactElement<any, any> => {
      return (
        <Modal visible={visible} transparent animationType="none">
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setVisible(false)}
          >
            <View style={[styles.dropdown, { top: dropdownTop }]}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      );
    };
    return (
      <TouchableOpacity
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}
      >
        {renderDropdown()}
        <Text style={styles.buttonText}>
          {(selected && selected.currency) || label}
        </Text>
        {/* <Icon style={styles.icon} type="font-awesome" name="chevron-down" /> */}
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'red',
      height: 50,
      zIndex: 1,
    },
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
    item: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
    },
  });
  

export default DropdownMenu;
