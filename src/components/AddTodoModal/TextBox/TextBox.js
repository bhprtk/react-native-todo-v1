import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icons from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import { styles } from './TextBoxStyles'
import * as actions from '../../../actions/creators';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
 } from 'react-native';
 import { Makiko } from 'react-native-textinput-effects';
 import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class TextBox extends Component {
	state = {
		text: ''
	}

  submitTodo = () => {
    const { addTodo } = this.props;
    // const { text } = this.state;
    addTodo(this.state.text)
  }

	render() {
    const {
      handleTextChange,
      selectedDay,
      textBoxText
    } = this.props;
    const day = moment(selectedDay).format('ddd, MMM Do');
    const placeholder = <Text>Add a task for <Text style={{ color: '#78909C' }}>{day}</Text></Text>
		return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          autoFocus={true}
          onChangeText={text => handleTextChange(text)}
          placeholder="Add a task..."
          style={styles.textInput}
          underlineColorAndroid="transparent"
          value={textBoxText}
          />
      </View>
		)
	}
}

function mapStateToProps(state) {
  return {
    selectedDay: state.selectedDay.toJS().selectedDay
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
