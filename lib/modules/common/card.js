// @flow

import React from 'react';
import { View, Text, Image, StyleSheet } from '../../components/index';

const Card = (props) => {

  const data = {
    title: '',
    descriptions: [],
    img: '',
    ...props
  };

  return (
    <View style={styles.card}>
      <View style={styles.card_left}>
        <Text style={styles.card_title}>{data.title}</Text>
        {data.descriptions[0] &&
          <Text style={styles.card_description}>• {data.descriptions[0]}</Text>}
        {data.descriptions[1] &&
          <Text style={styles.card_description}>• {data.descriptions[1]}</Text>}
        {data.descriptions.length > 2 &&
          <Text style={styles.card_more}>y {data.descriptions.length-2} ingredientes más.</Text>}
      </View>

      <View style={styles.card_right}>
        {!!data.img && <Image style={styles.card_img} source={{uri: data.img}}/>}
        {!data.img && <View style={styles.card_img} />}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({

  card: {
    height: 160,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
    flexDirection: 'row'
  },

  card_left: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16
  },
    card_title: {
      fontSize: 24,
      lineHeight: 24,
      color: '#555',
      marginBottom: 4,
    },
    card_description: {
      marginTop: 4,
      lineHeight: 14
    },
    card_more: {
      marginTop: 6,
      fontSize: 12,
      lineHeight: 12,
      color: '#888'
    },

    card_right: {
      width: 160,
      justifyContent: 'center',
      alignItems: 'center'
    },
      card_img: {
        backgroundColor: '#ddd',
        width: 134,
        height: 134
      }

});