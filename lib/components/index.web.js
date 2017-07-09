// @flow

import React, { Component } from 'react';
import { css } from 'glamor';

// -
export const View = (props) => {
  let { children, style, container, ...attrs } = props;
  if (style && style.length) style = style.join(' ');
  if (container) style = 'ctn ' + style;
  return <div className={'flex '+style} {...attrs}>{children}</div>;
};

export const ScrollView = (props) => {
  let { children, style, bounces, ...attrs } = props;
  return <View style={['scroll', style]} {...attrs}>{children}</View>;
};

export const Image = (props) => {
  let { source, style, ...attrs } = props;
  if (style && style.length) style = style.join(' ');
  if (source instanceof Object) source = source.uri;
  //if (!props.children)
    //return <img className={style} src={source} {...attrs} />;
  return <div className={'flex bgimg '+style} style={{backgroundImage: 'url('+source+')'}} {...attrs}>{props.children}</div>;
};

export const Touchable = (props) => {
  let { children, style, onPress, ...attrs } = props;
  return <View style={['touchable', style]} onClick={onPress} {...attrs}>{children}</View>;
};

export const Text = (props) => {
  let { children, style, aria, ...attrs } = props;
  if (style && style.length) style = style.join(' ');
  switch (aria) {
    case 'span': return (<span className={style} {...attrs}>{children}</span>);
    default: return (<p className={style} {...attrs}>{children}</p>);
  }
};

export const Span = (props) => <Text {...props} aria="span" />;

export const StyleSheet = {
  create: style => {
    Object.keys(style).forEach(c => {
      Object.keys(style[c]).forEach(s => {
        style[c][s] = s === 'lineHeight'? style[c][s]+'px':style[c][s];
      });
      style[c] = css(style[c]);
    });
    return style;
  }
};

export const Platform = { OS: 'web' };