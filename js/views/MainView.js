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
	StyleSheet,
	View,
	Navigator,
} from 'react-native';
import { connect } from 'react-redux';

import { Views, _select, _actions } from '../actions';
import ScannerView from './ScannerView';
import HomeView from './HomeView';


class MainView extends Component {
	props: {
		navigator: Navigator,
		data: any,
		switchView: (view: Views) => void;
	};

	constructor(props)
	{
		super(props);

		this.switchView = this.switchView.bind(this);
	}

	switchView(view: Views, data: any) {
		if (this.props.view !== view) {
			this.props.switchView(view, data);
		}
	}

	renderContent()
	{
		switch (this.props.view)
		{
			case 'scan':
				return (<ScannerView navigator={this.props.navigator} />);
			case 'result':
				return (<ResultView navigator={this.props.navigator} />);
		}

		return (<HomeView navigator={this.props.navigator} />);
	}

	render()
	{
		return (
			<View style={styles.container} key={this.props.view}>
				{this.renderContent()}
			</View>
		);
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

module.exports = connect(_select, _actions)(MainView);