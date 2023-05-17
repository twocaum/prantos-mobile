import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress}) {
    if (theme === "camera") {
      return (
        <View style={[styles.buttonContainer]}>
          <Pressable
            style={[styles.button, { backgroundColor: "#2980B9" }]}
            onPress={onPress}
          >
            <FontAwesome
              name="camera"
              size={18}
              color="#ECF0F1"
              style={styles.buttonIcon}
            />
            <Text style={[styles.buttonLabel, { color: "#ECF0F1" }]}>{label}</Text>
          </Pressable>
      </View>
      );
    }
    else if(theme == "gallery") {
      return (
          <View
          style={[styles.buttonContainer]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={onPress}
            >
              <FontAwesome
                name="picture-o"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
              />
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }
  
    return (
      <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
    );
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