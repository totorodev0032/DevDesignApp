import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ColorBox = ({colorName, hexCode}) => {

    const boxColor = {
        backgroundColor : hexCode,
    }

    const textColor = {
        color : parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
            ? 'black'
            : 'white'
    }
    return(
        // For two more styles in a component, we have to pass it as a array.
        <View style = {[styles.box, boxColor]} > 
            <Text style = {styles.text, textColor} >
                {colorName}: {hexCode}
            </Text>
        </View>
    )
}


//stylesheet object
const styles = StyleSheet.create({
    box : {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        color: 'white',
        // backgroundColor: '#268bd2'
    },

    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
      },
})

export default ColorBox;