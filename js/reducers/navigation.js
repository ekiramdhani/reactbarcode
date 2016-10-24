/**
 * This file is part of the ReactBarcode package.
 *
 * (c) Eki Prathama Ramdhani <eq.petrucci@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

import type { Actions } from '../actions/types';

type State = {
	view: Views;
};

const initialState: State = {
	view: 'search'
};

const initialAction: Actions = {
	view: 'search',
	type: 'SWITCH_VIEW',
	data: null
};

export default function navigation(state: State = initialState, action: Actions = initialAction): State
{
	if (action.type === 'SWITCH_VIEW')
	{
		return { ...state, view: action.view, data: action.data };
	}

	return state;
}
