

export function setUser(user){
    return{ type:'SET_USER', payload:user}
}
export function setAllUsers(users){
    return{ type:'SET_ALL_USERS', payload:users}
}