# NgrxCounter
Proyecto que implementa un CONTADOR, con un increment, decrement, reset, random y set. Implementado con NGRX para gestionar los estados.   

## Pasos para implementación
- ng add @ngrx/store -> para agregar el paquete NgRx a nuestro proyecto
- Definimos primeramente las Actions (estados) de nuestra app, y exportamos los estados (actions)
    export const set = createAction('set', props<{num: number}>());
- Definimos los reducers:
    const _counterReducer = createReducer(
        initialState,
        on(states.inc, state => state + 1),
        on(states.set, (state, { num }) => num ),
    );

    export function counterReducer(state, action) {
        return _counterReducer(state, action);
    }
- En el App Module:
    StoreModule.forRoot({ count: counterReducer }, {})

- En nuestro componente:
    count$: Observable<number>;
    this.count$ = this.store.pipe(select('count')); // Se llama 'count' porque en el forRoot colocamos 'count'
    this.store.dispatch(actions.set({ num: numTo })); // llamar a las actions






