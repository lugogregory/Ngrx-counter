import { createReducer, on } from '@ngrx/store';
import * as states from './contador.actions';

export const initialState = 0;

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(
    initialState,
    on(states.inc, state => state + 1),
    on(states.dec, state => state - 1),
    on(states.reset, state => 0),
    on(states.random, state => Math.floor(Math.random() * 100)),
    on(states.set, (state, { num }) => num ),
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
