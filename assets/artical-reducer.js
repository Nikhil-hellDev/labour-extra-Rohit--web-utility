export default function(state={},action){
    switch(action.type){
        case 'GET_ARTICLES':
            return {...state,articles:action.payload}
        case 'ADD_POST':
            return {...state,postSuccess:action.payload}
        case 'GET_POSTS':
            return {...state,posts:action.payload}
        case 'GET_POST':
            return {...state,post:action.payload}
        case 'UPDATE_POST':
            return {...state,postUpdate:action.payload}
        case 'DELETE_POST':
            return {...state,postDelete:action.payload}
        case 'USER_REGISTER':
            return {...state,newUser:action.payload}
        case 'USER_SIGNIN':
            return {...state,user:action.payload}
        case 'REFRESH_USER':
            return {...state,refresh:action.payload}
        default:
            return state;
    }
    
}