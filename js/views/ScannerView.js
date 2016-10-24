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
	StyleSheet,
	TouchableHighlight,
	Text
} from 'react-native';
import { connect } from 'react-redux';

import XBarcodeScanner from '../components/XBarcodeScanner'
import { _select, _actions } from '../actions';


class ScannerView extends Component {
	props: {
		navigator: Navigator;
		data: any;
	};

	state: {
		barcode: {
			type: string,
			data: string
		};
	};

	constructor(props)
	{
		super(props);

		this.state = {
			barcode: {
				type: null,
				data: null
			}
		};
	}

	/**
	 * Triggered when the barcode is able to read
	 * @param data
	 */
	_onBarcodeRead(data)
	{
		//this.props.switchView('result', data);
		this.setState({
			barcode: data
		});
	}

	_onPressButton()
	{
		this.props.switchView('home', null);
	}

	render()
	{
		return (
			<View style={[styles.container, this.props.style]}>
				<XBarcodeScanner
					onBarCodeRead={this._onBarcodeRead.bind(this)}
					style={{ alignSelf: 'stretch', height: 400 }}
					torchMode="off"
					cameraType="back">
				</XBarcodeScanner>
				<View style={styles.result}>
					<View style={styles.resultData}>
						<Text style={styles.barcodeType}>{this.state.barcode.type}</Text>
						<Text style={styles.barcodeData}>{this.state.barcode.data}</Text>
					</View>
					<TouchableHighlight style={styles.buttonBack} onPress={this._onPressButton.bind(this)}>
						<Text>Back</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},

	result: {
		padding: 20
	},

	buttonBack: {
		width: 200,
		height: 48,
		backgroundColor: '#6BBD6D',
		borderRadius: 3,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		padding: 10
	},

	resultData: {
		height: 200,
		backgroundColor: '#f0f0f0',
		borderRadius: 3,
		marginBottom: 20,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},

	barcodeType: {
		fontSize: 32,
		marginBottom: 15
	},

	barcodeData: {
		fontSize: 28,
	}
});

module.exports = connect(_select, _actions)(ScannerView);