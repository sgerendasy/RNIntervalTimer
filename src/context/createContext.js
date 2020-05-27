import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
    
    // this object is like a pipe, which will move information to the connecting ends
    const Context = React.createContext();
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        
        // actions === {addBlogPost: (dispatch) => {return () => {}}}
        // loop through actions object. For every key, call the function with the dispatch argument
        // this will return a function that will get passed to the Context.Provider
        // This is ugly but necessary so that the actions' function has access to dispatch.
        const boundActions = {};
         for (let key in actions)
         {
             boundActions[key] = actions[key](dispatch);
         }

         return (
             <Context.Provider value={{state, ...boundActions}}>
                {children}
             </Context.Provider>
         );
    };
    
    return {Context, Provider};
};
