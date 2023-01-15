
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator.jsx';



export default function App() {
  return (

    <NavigationContainer>
      <StratusBar barStyle='light-content'/>
      <Provider store={store}>
        <StackNavigator/>
      </Provider>
  </NavigationContainer>

  );
}


