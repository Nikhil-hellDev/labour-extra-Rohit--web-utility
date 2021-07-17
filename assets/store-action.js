import axios from 'axios';
const URL = `https://jsonplaceholder.typicode.com`;
const FIREBASEDB = `https://projectthree-76fd8.firebaseio.com`;
const APIKEY = `AIzaSyCB1ubqh0HGZmicCmenuzKB4M7WRl2Co7E`;
const REGISTER = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=`
const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=`
const TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzZTFiMGIyOTllNDIxZjU2ZWI1YTQ2NjhkMWNmMjNmNGFjNjk2NGMifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamVjdHRocmVlLTc2ZmQ4IiwiYXVkIjoicHJvamVjdHRocmVlLTc2ZmQ4IiwiYXV0aF90aW1lIjoxNTIxMDU0OTc0LCJ1c2VyX2lkIjoiUG15NmpycUxvM2RmMnBJdFlBSjhab0QxenhCMyIsInN1YiI6IlBteTZqcnFMbzNkZjJwSXRZQUo4Wm9EMXp4QjMiLCJpYXQiOjE1MjEwNTQ5NzQsImV4cCI6MTUyMTA1ODU3NCwiZW1haWwiOiJmcmFuY2lzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJmcmFuY2lzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iHiHSMczuGoxkHvGy3w98uaAQg166Q17t-eT0Z8GfTCMXo2ITDUft0xcrpot2jp6NXFtbkyUUxl2KDVdagd8YXwm67FuUIGxyd-iuEp5Kd9ofpXSXwBcHOL9rJ7KVUuOB4FJrAhM7WhI4mknimYtRVqlmVXuaxGhrgaccoXLQnk057FLMK4YHjsudv4ApS4h75Criv7CTbCIZ_lrRb7PTyCKWfcKhkLtEGftiYuqx3jG9xkioBvTd_FT27HI1f5isjwzo5PeTEnhHLkZBVg7VMduaD2HS00zO0s_wyZlDbpLgATzmUJlVIhkVmmHmXN7tdtbwUpmopU3ttdITjjq7g"
const REFRESH = `https://securetoken.googleapis.com/v1/token?key=`


export function getArticles(){
    const request = axios.get(`${URL}/posts`)
                .then(response => response.data);
    return {
        type:'GET_ARTICLES',
        payload:request
    }
}


export function addPost(post){
    const request = axios({
        method:"POST",
        url:`${FIREBASEDB}/posts.json`,
        data:post
    }).then( response => response.data)

    return {
        type:'ADD_POST',
        payload:request
    }

}

export function getPosts(){

    const request = axios(`${FIREBASEDB}/posts.json?auth=${TOKEN}`)
                .then(response => {
                    let posts = [];

                    for(let key in response.data){
                        posts.push({
                            ...response.data[key],
                            id:key
                        })
                    }
                    return posts;
                })

    return {
        type:'GET_POSTS',
        payload:request
    }

}

export function getPost(POSTID){

    const request = axios(`${FIREBASEDB}/posts/${POSTID}.json`)
                    .then(response => {
                        const post = {...response.data,id:POSTID}
                        return post;
                    })

    return {
        type:'GET_POST',
        payload:request
    }

}


export function updatePost(POSTID){

    const request = axios({
        method:"PATCH",
        url:`${FIREBASEDB}/posts/${POSTID}.json`,
        data:{title:"updated title",body:"updated body"}
    }).then(response => response.data);

    return {
        type:'UPDATE_POST',
        payload:request
    }

}

export function deletePost(POSTID){
 
    const request = axios({
        method:'DELETE',
        url:`${FIREBASEDB}/posts/${POSTID}.json`,
    }).then(response => response.data);

    return {
        type:'DELETE_POST',
        payload:request
    }

}



export function registerUser(data){

    const request = axios({
        method:"POST",
        url:`${REGISTER}${APIKEY}`,
        data:{
            email: data.email,
            password: data.password,
            returnSecureToken:true
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.data)

    return {
        type:"USER_REGISTER",
        payload:request
    }
}

export function signIn(data){
    const request = axios({
        method:"POST",
        url:`${SIGNIN}${APIKEY}`,
        data:{
            email: data.email,
            password: data.password,
            returnSecureToken:true
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.data)

    return {
        type:"USER_SIGNIN",
        payload:request
    }
}

export function refreshToken(REFRESHTOKEN){

    const request = axios({
        method:"POST",
        url:`${REFRESH}${APIKEY}`,
        data:`grant_type=refresh_token&refresh_token=${REFRESHTOKEN}`,
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }).then(response=>{
        return response.data
    }).catch(err=>{
        console.log('oop something wrong')
    })

    return {
        type:'REFRESH_USER',
        payload:request
    }

}