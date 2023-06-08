import { StyleSheet, View } from 'react-native';
import ImageLoader from './components/ImageLoader';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen'
import AudioList from './screens/AudioListScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#012233' }}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            )
          }} />
        <Tab.Screen name="Player" component={PlayerScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="play-circle" color={color} size={30} />
            ),
          }} />
        <Tab.Screen name="AudioList" component={AudioList}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="animation-play" color={color} size={30} />

            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013684',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
