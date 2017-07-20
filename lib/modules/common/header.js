// @flow

import React from 'react';
import { View, Text, Image, Touchable, StyleSheet, Platform } from '../../components';

const Header = (props = {}) => {

  const data = {
    ...props
  };

  return (
    <View style={[styles.header, data.style]}>
      <View style={styles.side}>
        {data.back &&
        <Touchable onPress={data.back} style={styles.side_btn}>
          <Image source={require('../../../public/img/icon-back.png')} style={styles.side_img} />
        </Touchable>}
      </View>

      <View style={styles.title}>
        {data.title !== 'custom'? <Text style={styles.title_text}>{data.title}</Text>: data.children}
      </View>

      {data.right !== 'hidden' &&
      <View style={styles.side}>
        {data.right &&
        <Touchable onPress={data.onPress} style={styles.side_btn}>
          <Image source={data.right} style={styles.side_img} />
        </Touchable>}
      </View>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    backgroundColor: '#19bbd1',
    height: Platform.OS === 'android' ? 70: Platform.OS === 'ios' ? 66: 48,
    paddingTop: Platform.OS === 'android' ? 24: Platform.OS === 'ios' ? 20: 0
  },

  side: {
    width: 46
  },
    side_btn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    side_img: {
      height: 24,
      width: 24
    },

  title: {
    flex: 1,
    justifyContent: 'center'
  },
    title_text: {
      color: '#fff',
      fontSize: 17,
      textAlign: 'center'
    }

});