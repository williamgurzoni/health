import React, { Component } from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterActive: [],
    };
  }

  renderFilterItem(item, key) {
    var filterImage = '';
    switch(item.image){
    case 'img/ic_yoga.png':
      filterImage = require('./img/ic_yoga.png');
      break;
    case 'img/ic_upper_body.png':
      filterImage = require('./img/ic_upper_body.png');
      break;
    case 'img/ic_lower_body.png':
      filterImage = require('./img/ic_lower_body.png');
      break;
    case 'img/ic_dance.png':
      filterImage = require('./img/ic_dance.png');
      break;
    default:
      filterImage = require('./img/ic_dance.png');
    }
    
    return(
      <TouchableOpacity key={ key } onPress={ () => this.pressFilter(key) }>
        <LinearGradient
          start={{ x: 0.2, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          colors={ ['#7F38F4', '#F22B48'] }
          style={ styles.linearGradient }
        >
          <View style={ this.state.filterActive.indexOf(key) >= 0 ? styles.filterInactive : styles.filterActive }><IconMC name='check' color='#FFFFFF' /></View>
          <Image source={ filterImage } />
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  pressFilter(key) {
    // Refreshes state with applied filters
    let { filterActive } = this.state;
    if (filterActive.indexOf(key) >= 0){
      filterActive.splice(filterActive.indexOf(key), 1);
    } else {
      filterActive.push(key);
    }
    this.setState({ filterActive });
    this.props.filterItens(filterActive);
  }

  render() {
    return (
      <View style={ styles.boxFilter }>
        <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
          { this.props.filters.map((item, key) => this.renderFilterItem(item, key)) }
        </ScrollView>
      </View>
    );
  }
}
