import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReturnMenu({onPress}) {
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress={onPress}
                    style={{
                        top: 10,
                        left: 10,
                        flexDirection: 'row',
                        flex: 0,
                    }}
                >
                    <MaterialIcons name="keyboard-return" size={20} color="white" />
                    <Text 
                        style={{
                            fontSize: 15,
                            color: "white",
                            position: "relative"
                        }}
                    > Return
                    </Text>
                        
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
