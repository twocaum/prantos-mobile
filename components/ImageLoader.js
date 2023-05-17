import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function ImageLoader() {
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          quality: 1,
        });
    
        if (!result.canceled) {
        alert('An image was selected');
        } 
        else {
          alert('You did not select any image.');
        }
    };


    return (
        <View>
            <View style={[styles.buttonContainer]}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#2980B9" }]}
                >
                    <FontAwesome
                    name="camera"
                    size={18}
                    color="#ECF0F1"
                    style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#ECF0F1" }]}>{"Take a picture"}</Text>
                </Pressable>
            </View>
            
            <View style={[styles.buttonContainer]}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={pickImageAsync}
                >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
                <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{"Choose from your gallery"}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#000',
      fontSize: 16,
    },
  });