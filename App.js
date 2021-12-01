import React from 'react';
import {useState, useMemo} from 'react';

import {View, Text, TextInput, Button, SafeAreaView, RefreshControl, StyleSheet, ScrollView} from 'react-native';

//Week 4

//Type 1
/*
const Greeting = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Hello {props.name}</Text>
    </View>
  );
}
//Type 2

const Greetings = (props) => {
  const { name } = props;
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {name}</Text>
    </View>
  )
}

const LotOfGreeting = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Greeting name="Merry Christmas" />
      <Greeting name="Happy New Year" />
      <Greeting name="Songkran Festival" />
    </View>
  );
}

const CustomText = ({fname ,lname}) => {
  return (
    <View>
      <Text>Your First name is {fname} and Last name is {lname}</Text>
    </View>
  )
} 

const App = () => {
  const [number, setNumber] = useState(0);
  const [isRandom, setRandom] = useState(false);

  const randomNumberWithoutMemo = Math.random();

  const randomNumber = useMemo(() => {
    return Math.random();
  }, [isRandom]);


  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Button
          title="down"
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Text style={styles.countNumber}>{number}</Text>
        <Button
          title="up"
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
      <Text>without useMemo: {randomNumberWithoutMemo}</Text>
      <Text>useMemo: {randomNumber}</Text>
      <Button
        title="Random"
        onPress={() => {
          setRandom(!isRandom);
        }}
      />
    </View>
  );
}


const wait = (timeout) =>{
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const App = () => {
  const [refreshing,setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(()=>{
    setRefreshing(true);
    wait(2000).then(()=>setRefreshing(false));
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle = {styles.ScrollView}
        refreshControl = {
          <RefreshControl refreshing = {refreshing} onRefresh={onRefresh}/>
        }
      >
          <Text>Pull down to see RefreshControl</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const UselessTextInput = () => {
  const [text, onChangeText] = useState('Useless Text: ');

  const [number, onChangeNumber] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={() => {
          onChangeText();
        }}
        value={text}
      />
      <Text>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={() => {
          onChangeNumber();
        }}
        keyboardType="numeric"
        value={number}
      />
      <Text>{number}</Text>
    </SafeAreaView>
  );
};
*/

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const checkValueIsNumeric = text => {
    if (isNaN(inputValue) && !inputValue) {
      alert('Not numeric');
    } else {
      alert('Correct');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Text"
          onChangeText={inputValue => {
            setInputValue(inputValue);
          }}
        />
        <Button
          color="#606070"
          title="Validate Value is Numeric"
          onPress={() => {
            checkValueIsNumeric();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  countContainer: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
});

export default App; 

//Week 2

/*
const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Cat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello I am {getFullName("Phurit","Patiparn","Sanmook")}</Text>
    </View>
  );
};

const Cafe = () => {
  var cat = [];
  for (let index = 0; index < 6; index++) {
    cat.push(<Cat />);
  }
  return (
    <View>
      <Text>Welcome!</Text>
      {cat}
    </View>
  );
};

const Cat = () => {
  return (
    <View style={{padding: 50}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Input"
          style={{
            width: '80%',
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Button title="ADD" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 5,
    padding: 15,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    alignItems: "center",
    fontWeight: "bold",
    color: "black"
  }
})
*/