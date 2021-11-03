
const receivesAFunction = spy => spy ( );

const returnsANamedFunction = ( ) => {
    return function fn ( ) {
    }
};

const returnsAnAnonymousFunction = ( ) => {
    return function ( ) {
    }
}
