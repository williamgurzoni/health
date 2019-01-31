import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../header';
import Filter from '../filter';
import Exercices from '../exercices';
import Api from '../../api';
import styles from './style';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      exercices: [],
      exercicesNoFilter: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { filters, exercices } = await Api.getData();
    this.setState({ filters, exercices, exercicesNoFilter: exercices });
  }

  filterItens(keys) {
    const { filters, exercicesNoFilter } = this.state;

    // filtered = filtered categories
    let filtered = keys.map((item) => {
      return filters[item].name;
    });
    
    let exercicesFiltered = exercicesNoFilter.filter((item) => {
      if (filtered.indexOf(item.category) === -1) {
        return true;
      }
    });

    this.setState({ exercices: exercicesFiltered });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header />
        <Filter filters={ this.state.filters } filterItens={ (keys) => this.filterItens(keys) }/>
        <Exercices exercices={ this.state.exercices } />
      </View>
    );
  }
}
