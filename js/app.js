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
	StatusBar,
	StyleSheet,
	View
} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers';
import XNavigator from './components/XNavigator';

const store = createStore(reducers)

export default class ReactBarcode extends Component {
	render()
	{
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar
						translucent={true}
						backgroundColor="rgba(0, 0, 0, 0.2)"
						barStyle="light-content"/>
					<XNavigator />
				</View>
			</Provider>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa'
	},
});