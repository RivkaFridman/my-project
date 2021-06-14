

// export function setFirstName(first_name){

//     return {type:"SET_FIRST_NAME", payload:first_name}
// }

// export function setLastName(last_name){

//     return {type:"SET_LAST_NAME", payload:last_name}
// }
// export function setCompanyName(name){

//     return {type:"SET_COMPANY_NAME", payload:name}
// }
// export function setCustomerName(name){

//     return {type:"SET_CUSTOMER_NAME", payload:name}
// }
// export function setCustomerCity(name){

//     return {type:"SET_CUSTOMER_CITY", payload:name}
// }

function convertToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

export const actions=new Proxy(

    {},
    {
        get: function(target,prop){
            if(target[prop]===undefined)
             {
                 return function(args){
                  return { 
                     type: convertToType(prop),
                     payload:args
                    }
                 }
                 
             }
             else return target[prop]

    }

    }


)