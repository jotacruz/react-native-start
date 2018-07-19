import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{nome: 'Jonatas'}, {nome: 'Cruzx'}],
      page: 1
    }
  }

  componentDidMount(){
    fetch("", () => {})
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Olá, teste</Text>
        </View>
        <FlatList 
          data={this.state.data}
          renderItem={({item}) => <Text>{item.nome}</Text>}
        />
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
