import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { styles } from '../components/styles';

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="Register"
          iconName="person-add"
          color="white"
          onPress={() => 
            navigation.navigate('Register')
          }
        />
      </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            color="white"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Ionicons name="home" size={50} color="#FFBCBC" />
      <Text>Home</Text>
      <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('About', {email: 'he.pongpanot_st@tni.ac.th'});
          }}>
          <Text style={styles.buttonTextStyle}>Go to setting Tab</Text>
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;