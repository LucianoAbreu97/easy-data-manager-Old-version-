import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from './src/screens/Login'
import Cadastro from './src/screens/Cadastro'
import Home from './src/screens/Home'
import HomeAux from './src/screens/HomeAux'
import Criacao from './src/screens/Criacao'
import List from './src/screens/List'
import FList from './src/screens/FList'
import Sobre from './src/screens/Sobre'
import {firebase} from './src/database/firebase'

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const handleLogin = () => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  };

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <BottomTab.Screen name="Aux" component={HomeAux} options={{ headerShown: false }} />
      <BottomTab.Screen name="Criação" component={Criacao} options={{ headerShown: false }} />
      {/*<BottomTab.Screen name="List" component={List} options={{ headerShown: false }} />
      <BottomTab.Screen name="FlatList" component={FList} options={{ headerShown: false }} />*/}
      <BottomTab.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Home' component={BottomTabNavigator} />
        {/*<Stack.Screen name="Aux" component={HomeAux} options={{ headerShown: false }} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
