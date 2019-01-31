import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './style';

const bike = require('./img/ic_bike.png');
const balance = require('./img/ic_balance.png');
const time = require('./img/ic_time.png');

export default class Exercices extends Component {
  checkTime(time) {
    if (time % 60 === 0){
      return time / 60 + ' h';
    } else {
      return time + 'm';
    }
  }

  whenBtnStyle(btn, property) {
    if (btn === property) {
      if (btn === 'today') {
        return styles.todayActive;
      } else {
        return styles.yesterdayActive;
      }
    }
    return styles.inactive;
  }

  _renderItem({ item }) {

    let itemImage = '';
    switch (item.image) {
    case 'img/running.png':
      itemImage = require('./img/running.png');
      break;
    case 'img/bodybuilding.png':
      itemImage = require('./img/bodybuilding.png');
      break;
    case 'img/cycling.png':
      itemImage = require('./img/cycling.png');
      break;
    case 'img/yoga.png':
      itemImage = require('./img/yoga.png');
      break;
    }
    
    return(
      <View style={ styles.boxItem }>
        <View style={ styles.boxItemLeft }>
          <View style={ styles.circle }>
            <Image
              style={ styles.image }
              source={ itemImage }
            />
          </View>
        </View>
        <View style={ styles.boxItemRight }>
          <Text style={ styles.name }>{ item.name.toUpperCase() }</Text>
          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <Image style={ [styles.infoImg, { borderLeftWidth: 0 }] } source={ bike } />
            <Text style={ styles.info }>{ item.calories } kcal</Text>
            <Image style={ styles.infoImg } source={ time } />
            <Text style={ styles.info }>{ this.checkTime(item.time) }</Text>
            <Image style={ styles.infoImg } source={ balance } />
            <Text style={ styles.info }>{ item.weight } kg</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <View style={ [styles.btnTodayYesterday, this.whenBtnStyle('today', item.when)] }>
              <Text style={ styles.btnTodayYesterdayText }>HOJE</Text>
            </View>
            <View style={ [styles.btnTodayYesterday, this.whenBtnStyle('yesterday', item.when)] }>
              <Text style={ styles.btnTodayYesterdayText }>ONTEM</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={ this.props.exercices }
        renderItem={ item => this._renderItem(item) }
        showsVerticalScrollIndicator={ false }
        keyExtractor={ item => item.name }
      />
    );
  }
}
