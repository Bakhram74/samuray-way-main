import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2a841c9d-26d3-4e3d-ba3a-9d6226041b0d"
    }
})
export const usersAPI = () => {
    return {
        getUsersAPI: (currentPage: number, usersOnPage: number) => {
            return instance.get(`users?page=${currentPage}&count=${usersOnPage}`)
                .then(response => response.data)
        },
        followApi: (id: string) => {
            return instance.post(`follow/${id}`)

                .then(response => response.data.resultCode)

        },
        unFollowApi: (id: string) => {
            return instance.delete(`follow/${id}`)
                .then(response => response.data.resultCode)
        },
        // getProfile:(userId:string)=>{
        //     console.warn('Obsolete method. Please use profileAPI object')
        //   return   profileAPI.getProfile(userId)
        // }
    }
}

export const profileAPI = {
        getProfile:(userId:string)=>{
            return instance.get('profile/'+userId)
                .then(response=> response)
    },
    getStatus:(userId:string)=>{
        return instance.get('profile/status/'+userId)
    },
    updateStatus:(status:string)=>{
        return instance.put(`profile/status`,{status:status})
    }

}

export const authMe = {
    me(){
return instance.get('auth/me')
    },
    login(data:{email:string,password:string,rememberMe:boolean}){
        return instance.post('auth/login',{...data})
    },
    loginOut(){
        return instance.delete('auth/login')
    }
}

