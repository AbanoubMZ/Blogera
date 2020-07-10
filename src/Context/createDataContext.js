import React,{useReducer} from 'react'


export default (reducer,actions,initialState)=>{
    //Source of shipping or transfering data to the other components
    const Context=React.createContext();
    //children are the showing things inside the component like text in any regular component 

    const Provider = ({children})=>{
        const [state,dispatch] = useReducer(reducer,initialState);
        //ACTIONS === {addBlogPost:(dispatch)=>{return ()=>{}}}
        const boundActions={};

        for (let key in actions ){
            boundActions[key]=actions[key](dispatch);
        }

        return <Context.Provider value={{state,...boundActions}}>{children}</Context.Provider>
    };

    return {Context,Provider};
};