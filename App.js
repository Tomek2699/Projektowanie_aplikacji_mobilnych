import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./routes/HomeScreen";
import LevelsScreen from "./routes/LevelsScreen";
import SettingsScreen from "./routes/SettingsScreen";
import EasyLevelScreen from "./routes/EasyLevelScreen";
import MediumLevelScreen from "./routes/MediumLevelScreen";
import HardLevelScreen from "./routes/HardLevelScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Levels" component={LevelsScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="EasyGame" component={EasyLevelScreen}/>
        <Stack.Screen name="MediumGame" component={MediumLevelScreen}/>
        <Stack.Screen name="HardGame" component={HardLevelScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}