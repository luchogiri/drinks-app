// @flow

import React, { Component } from 'react';
const RN = require('react-native');


export const View = RN.View;
export const ScrollView = RN.ScrollView;
export const Touchable = RN.TouchableOpacity;
export const Platform = RN.Platform;
export const Image = RN.Image;

export const Text = (props) => {
  let { children, style, ...attrs } = props;
  return <RN.Text style={[styles.default_text, style]} {...attrs}>{children}</RN.Text>;
};

export const Span = Text;

export const StyleSheet = {
  create: (style = {}) => {
    Object.keys(style).forEach(c => {
      Object.keys(style[c]).forEach(s => {
        if (s === 'display') delete style[c][s];
        if (s === 'boxShadow') delete style[c][s];
      });
    });
    return RN.StyleSheet.create(style);
  }
};

// common styles
const styles = RN.StyleSheet.create({
  default_text: {
    color: '#767676'
  }
});