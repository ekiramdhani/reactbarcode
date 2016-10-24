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

import type { Views, Actions } from './types';


module.exports = {
	switchView: (view: Views, data: any): Actions => ({
		type: 'SWITCH_VIEW',
		view,
		data
	}),
};