import { createStore } from 'redux';

/********************
 * Initial state    *
 ********************/
var initialState = {
    loggedIn: false,
    //loggedOut: false,
};

/***********
 * Reducer *
 ***********/
/* Actions ALWAYS have the following object structure (where the payload has to be an object)

        {
            type:String,
            payload: { success:any, id:any, anythingElse:any ...}
        }
*/

function reducer(state, action)
{
    switch(action.type)
    {
        case 'setLoggedIn':
            return { ...state, loggedIn: action.payload };
        //case 'setLoggedOut':
        //    return { ...state, loggedOut: action.payload };
        default:
            return state;
    }
}


/**************************
 * Create the store and
 * export the module
 *************************/
var store = createStore(
  reducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; 