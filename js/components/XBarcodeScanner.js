/**
 * This file is part of the Barcode package.
 *
 * (c) Eki Prathama Ramdhani <eq.petrucci@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

'use strict';

import React, { Component, PropTypes, } from 'react';
import {
	requireNativeComponent,
	View,
} from 'react-native';

import XBarcodeScannerView from './XBarcodeScannerView';


var ReactNativeBarcodeScanner = requireNativeComponent('ReactNativeBarcodeScanner', XBarcodeScanner, {
	nativeOnly: {onChange: true}
});

export default class XBarcodeScanner extends Component {
	constructor(props)
	{
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(event)
	{
		if (!this.props.onBarCodeRead)
		{
			return;
		}

		this.props.onBarCodeRead({
			type: event.nativeEvent.type,
			data: event.nativeEvent.data,
		});
	}

	render()
	{
		let barcodeScannerView = this.props.showViewFinder ? (
			<XBarcodeScannerView
				backgroundColor={this.props.viewFinderBackgroundColor}
				color={this.props.viewFinderBorderColor}
				borderWidth={this.props.viewFinderBorderWidth}
				borderLength={this.props.viewFinderBorderLength}
				height={this.props.viewFinderHeight}
				isLoading={this.props.viewFinderShowLoadingIndicator}
				width={this.props.viewFinderWidth}>
			</XBarcodeScannerView>
		) : null;

		return (
			<ReactNativeBarcodeScanner {...this.props} onChange={this.onChange}>
				<View style={this.props.style} collapsable={false}>
					{barcodeScannerView}
					{this.props.children}
				</View>
			</ReactNativeBarcodeScanner>
		);
	}
}

XBarcodeScanner.propTypes = {
	...View.propTypes,
	cameraType: PropTypes.string,
	onBarCodeRead: PropTypes.func,
	showLoadingIndicator: PropTypes.bool,
	showViewFinder: PropTypes.bool,
	torchMode: PropTypes.string,
	viewFinderBackgroundColor: PropTypes.string,
	viewFinderBorderColor: PropTypes.string,
	viewFinderBorderWidth: PropTypes.number,
	viewFinderBorderLength: PropTypes.number,
	viewFinderShowLoadingIndicator: PropTypes.bool,
	viewFinderHeight: PropTypes.number,
	viewFinderWidth: PropTypes.number
};

XBarcodeScanner.defaultProps = {
	showViewFinder: true,
	showLoadingIndicator: true,
};
