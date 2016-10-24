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

type Actions =
	{ type: 'SWITCH_VIEW', view: 'home' | 'scan', data: any }
;

type Views = 'home' | 'scan';


module.exports = {
	Actions: Actions,
	Views: Views
};