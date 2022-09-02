import { NavigationContainer } from "@react-navigation/native";
import WebViewContainer from "./components/WebViewContainer";
import { createStackNavigator } from "@react-navigation/stack";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

export type StackParamList = {
  Webview: {
    url: string;
  };
};

const Stack = createStackNavigator<StackParamList>();
// const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          initialParams={{ url: "/" }}
          name="Webview"
          component={WebViewContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
