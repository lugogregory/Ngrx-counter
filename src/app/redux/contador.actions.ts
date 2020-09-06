import { createAction, props } from '@ngrx/store';

// Lo primero que creamos son las ACCIONES, que serán los estados de nuestra aplicación

export const inc = createAction('increment');
export const dec = createAction('decrement');
export const reset = createAction('reset');
export const random = createAction('random');
export const set = createAction('set',
    props<{num: number}>());

