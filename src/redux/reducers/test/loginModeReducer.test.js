import loginModeReducer from '../loginModeReducer';

describe('Test login Reducer', () => {

    test('initial state', () => {
        let action = {};
        let returnedState = loginModeReducer( undefined, action);
        expect( returnedState ).toEqual( 'login' );
    });

    test('check login mode sets state to login', () => {
        let action = {type: 'SET_TO_LOGIN_MODE'};
        let returnedState = loginModeReducer( undefined, action);
        expect( returnedState ).toEqual( 'login' );
    });

    test('check register action sets state to register', () => {
        let action = {type: 'SET_TO_REGISTER_MODE'};
        let returnedState = loginModeReducer( undefined, action);
        expect( returnedState ).toEqual( 'register' );
    });

})