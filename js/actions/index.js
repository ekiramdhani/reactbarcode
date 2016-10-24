/**
 * This file is part of the ReactBarcode package.
 *
 * (c) Eki Prathama Ramdhani <eq.petrucci@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

import type { Actions, Views } from './types';
import { switchView } from './navigation';


module.exports = {
	switchView: switchView,
	_select: (store) => ({
		data: store.navigation.data,
		view: store.navigation.view,
	}),

	_actions: (dispatch) => ({
		switchView: (view, data) => {
			return dispatch(switchView(view, data))
		},
	})
};