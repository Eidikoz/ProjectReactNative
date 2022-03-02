import React, {useState, useLayoutEffect, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Badge,
} from 'native-base';
import axios from 'axios';

const DetailScreen = ({navigation, route}) => {
  const {id, title} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({title: title});
  }, [navigation]);

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  //getData from server
  const getData = async id => {
    setLoading(true);
    const res = await axios.get(
      `https://api.codingthailand.com/api/course/${id}`,
    );
    // alert(JSON.stringify(res.data.data[0].title));
    setDetails(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const _onRefresh = () => {
    getData(id);
  };

  return (
    <View>
      <FlatList
        // set the data form server
        data={details}
        // Extract the key from the data with keyExtractor
        keyExtractor={(item, index) => {
          item.ch_id.toString();
        }}
        // pull dow to refresh
        onRefresh={() => {
          _onRefresh();
        }}
        refreshing={loading} // If is still refreshing wait for it to done
        // render the data with renderItem
        renderItem={({item, index}) => (
          <ListItem thumbnail>
            <Left>
              <View>
                <Text>{index + 1}</Text>
              </View>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <View>
                <Badge danger>
                  <Text>{item.ch_view}</Text>
                </Badge>
                {/* <Button transparent>
                  <Text>View</Text>
                </Button> */}
              </View>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default DetailScreen;