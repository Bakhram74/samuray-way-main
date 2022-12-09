
export type InitAuthDataType = {
    id: number|null,
    login: string|null,
    email: string|null
    isAuth:boolean
}
const initAuthData:InitAuthDataType = {
    id: null,
    login: null,
    email:null,
    isAuth:false
}


const authReducer = (state = initAuthData, action: SetUserDataType): InitAuthDataType => {
    switch (action.type){
        case "SET-USER-DATA":{
            return {...state,...action.data,isAuth:true}
        }
        default:
            return state
    }
}


export default authReducer

type SetUserDataType = {
    type:'SET-USER-DATA'
    data:InitAuthDataType
}
export const setUserDataAC = (data:InitAuthDataType):SetUserDataType=>{
    return{
        type:'SET-USER-DATA',
        data
    }
}