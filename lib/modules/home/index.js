// @flow

import React, { Component } from 'react';
import { View, Text, Touchable, StyleSheet } from '../../components/index';
// import { withRouter } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Hello World</Text>
        {/*<Touchable onPress={() => this.props.navigation.navigate('Chat')}>*/}
        {/*<Touchable onPress={() => this.props.history.push('/chat')}>*/}
        <Touchable onPress={null}>
          <Text>Go chat with lucy</Text>
        </Touchable>
      </View>
    );
  }
}

export default Home;
// export default withRouter(Home);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  }
});