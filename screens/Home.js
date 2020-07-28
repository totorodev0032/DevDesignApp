import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.push('ColorPallette')}>
                <Text>Solarized</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;