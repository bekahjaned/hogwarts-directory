import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CharacterScreen from "./src/screens/CharacterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Character: CharacterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Hogwarts'
    }
  }
)

export default createAppContainer(navigator)