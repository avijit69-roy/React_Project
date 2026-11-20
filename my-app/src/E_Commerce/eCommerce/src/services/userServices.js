import apiclient from '../utils/api-client';
import  {jwtDecode}  from 'jwt-decode'
const tokenName ="token"


//Signup function
export async function signup(user,profile){
    const body=new FormData();
    body.append("name",user.name);
    body.append("email",user.email);
    body.append("password",user.password);
    body.append("deliveryAddress",user.deliveryAddress);
    body.append("profilePic",profile);

    const res=await apiclient.post("/user/signup",body);
    localStorage.setItem(tokenName,res.data.token);
}


//Login function
export async function login(user){
    const res= await apiclient.post("/user/login",user);
    localStorage.setItem(tokenName,res.data.token);
}

//Logout function
export function logout(){
    localStorage.removeItem(tokenName);
}


//GetUser function
export function getUser(){
    try {
         const Jwt= localStorage.getItem(tokenName);
         return jwtDecode(Jwt);
    } 
    catch (error) { 
        return null;
    }
}


export function getJwt(){
    return localStorage.getItem(tokenName);
}
