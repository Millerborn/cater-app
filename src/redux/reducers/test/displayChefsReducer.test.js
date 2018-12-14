import displayChefReducer from '../displayChefsReducer';

describe('Test chef Reducer', () => {

    test('initial state', () => {
        let action = {};
        let returnedState = displayChefReducer( undefined, action);
        expect( returnedState ).toEqual( [] );
    });

    test('second state', () => {
        let action = {type: 'GET_CHEFS'};
        let returnedState = displayChefReducer( undefined, action);
        expect( returnedState ).toEqual( [] );
    });

})