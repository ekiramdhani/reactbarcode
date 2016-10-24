/**
 * This file is part of the ReactBarcode package.
 *
 * (c) Eki Prathama Ramdhani <eq.petrucci@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

import { Component } from 'react';
import {
	View,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { switchView, _select, _actions } from '../actions';


class ResultView extends Component
{
	render()
	{
		return (
			<View style={styles.container}></View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

module.exports = connect(_select, _actions)(ResultView);