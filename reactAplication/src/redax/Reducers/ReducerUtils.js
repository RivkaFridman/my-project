



function convertToType(actionName) {
    return actionName.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}


export const createRducer=(state,action,handlers)=>{

    const key=convertToType(action.type)
    const hendle=handlers[key]
    if(hendle)
     hendle(state,action)
}

//עובד מהמםם