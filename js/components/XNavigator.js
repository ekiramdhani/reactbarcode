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
	Navigator,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import MainView from '../views/MainView';
import ScannerView from '../views/ScannerView';


class XNavigator extends Component {
	render()
	{
		return (
			<Navigator
				ref="navigator"
				style={styles.container}
				configureScene={(route) => {
					return Navigator.SceneConfigs.FloatFromLeft;
				}}
				initialRoute={{}}
				renderScene={this.renderScene}
			/>
		);
	}

	renderScene(route, navigator)
	{
		if (route.view === 'scan')
		{
			return (<ScannerView navigator={navigator}/>);
		}

		return (<MainView navigator={navigator}/>);
	}
}

const TOOLBAR_HEIGHT = 56;
const STATUSBAR_HEIGHT = 25;

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
});

function select(store)
{
	return {
		view: store.navigation.view,
	};
}

module.exports = connect(select)(XNavigator);