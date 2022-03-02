import { styles } from '../components/styles';
import React from 'react';
import { Text, View, Button} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

import {userStoreContext} from '../context/UserContext';

const IoniconsHeaderButton = props => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="search"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  // ประกาศตัวแปร userStore เพื่อรับข้อมูล
  const userStore = React.useContext(userStoreContext);

  return (
    <View style={styles.container}>
      <Ionicons name="home" size={30} color="skyblue" />
      <Text>Home Screen</Text>
      {userStore.profile && (
        <>
          <Text>Welcome: {userStore.profile.name}</Text>
          <Text>Email: {userStore.profile.email}</Text>
        </>
      )}
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {
            email: 'he.pongpanot_st@tni.ac.th',
          })
        }
      />
    </View>
  );
};

export default HomeScreen;