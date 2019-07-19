/* eslint-disable no-console */
import feathers from '@feathersjs/client';

import io from 'socket.io-client';

// require('dotenv').config();

// @feathersjs/client is exposed as the `feathers` global.
const app = feathers();

const url =
  process.env.NODE_ENV === 'production'
    ? 'https://tvillage-s.herokuapp.com'
    : 'http://localhost:3030';

 const bucket = process.env.AWS_BUCKET;

// console.log(process.env.NODE_ENV);
if (process.browser) {
// Socket.io is exposed as the `io` global.
const socket = io(url, {
  transports: ['websocket'],
  forceNew: true
});



// Connect to a different URL

const socketsClient = feathers.socketio(socket, {
  timeout: 100000
});

// Configure socket client
app.configure(socketsClient);
// incase we later have to do authentication


  app.configure(
    feathers.authentication({
      storage: window.localStorage
      // timeout: 20000
    })
  );
}

const sendToken = (api,action, value) =>
  api.service('authManagement').create({ action, value }, {});






const signin = async (api,data) => {
 
    try{
      // sign in, 
      const login =await api.authenticate({
        strategy: 'local',
        ...data
      });

      // wait for sigin to get jwt

      const { accessToken } = await login

// store jwt in local storage
    localStorage.setItem('feathers-jwt', accessToken);

      // read userId from jwt
      const { userId } = await api.passport.verifyJWT(accessToken);

      // once you have the userId return it so you can use it to redirect user to dashboard
    return userId
    
    }
    catch(res){

      console.log(res)

      return res
      
      }
     // return null
  };

  
const getUser = (api,userId)=> api.service('users').get(userId);

const getStatesOfStudy=(api)=>api.service('/json').get('/data/sch-state.json')

const getStates=(api)=>api.service('/json').get('/data/states.json').then(
  (data)=>console.log('tell me: ',data)
)
 
const getStatesAb=(api)=>api.service('/json').get('/data/state-ab.json')


const getAuthUserFromJWT=async(api,token)=>{
  try{
    if (token) {
      const { userId } = await api.passport.verifyJWT(token);
let authUser=null
      if (userId) {
        // console.log('id: ', userId);
        authUser = await getUser(api,userId);
        //  console.log('authUser: ', authUser);
      }
return authUser
    }
  }catch(err){
    return err
  }
  return null
}


 const  getAuthUserFromStoredJWT = async (api) => {
    try {
      let authUser=null
      const token = await localStorage.getItem('feathers-jwt');
    if(token){
      authUser=await getAuthUserFromJWT(api,token)
    }
      return authUser
    } catch (res) {
      return res
    }

  };


const generateSearchResult =(api)=>api
    .service('stories')
    .find()
    .then(({ data }) =>
      data.map(({ title, goal, user,guardians }) => {
     
        if (user) {
          const { id, avatar, firstname, lastname,} = user;
          const label=  guardians.some(({userId})=>userId===user.id)?'Guardian':'Student'
       
          console.log('hooo: ',label)
          return {
            id,
            title: `${firstname} ${lastname} (${label})`,
            image: `${avatar||'/static/imgs/avatar.png'}`,
            description: `${title}`,
            price: `$ ${goal}`
          };
        }
        //  const { title, goal } = story;
        return {
          id: null,
          title: ``,
          image: ``,
          description: ``,
          price: ``
        };
      })
    )

 

export  {
  app,
  url,
  bucket,
  sendToken,
  getUser,
  signin,
  getAuthUserFromJWT,
  getAuthUserFromStoredJWT,
  generateSearchResult,
  getStatesOfStudy,
  getStates,
  getStatesAb
};
