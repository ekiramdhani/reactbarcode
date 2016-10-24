/**
 * This file is part of the ReactBarcode package.
 *
 * (c) Eki Prathama Ramdhani <eq.petrucci@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

import React, { Component } from 'react';
import {
	View,
	Navigator,
	Text,
	StyleSheet,
	TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

import { _select, _actions } from '../actions';


class HomeView extends Component {
	props: {
		navigator: Navigator;
	};

	_onPressButton()
	{
		this.props.switchView('scan');
		//this.props.navigator.push({view: 'scan'});
	}

	render()
	{
		return (
			<View style={styles.container}>
				<Text>Click the button below to start scan</Text>
				<TouchableHighlight style={styles.buttonScan} onPress={this._onPressButton.bind(this)}>
					<Text>SCAN</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonScan: {
		width: 200,
		height: 48,
		backgroundColor: '#6BBD6D',
		borderRadius: 3,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		padding: 10
	}
});

module.exports = connect(_select, _actions)(HomeView);