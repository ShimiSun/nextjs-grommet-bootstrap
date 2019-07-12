import PasswordValidator from 'password-validator';
import axios from 'axios';
// import moment from 'moment'
/* eslint-disable new-cap */



const statesAb = require('static/data/state-ab.json');

const zipkey = process.env.ZIPCODE_CLIENT_KEY

const usdatakey=process.env.US_DATA_API

const getAddress = async zip => {
  // console.log('key: ', key);
  const { data } = await axios.get(
    `https://www.zipcodeapi.com/rest/${zipkey}/info.json/${zip}/degrees`
  );
  return data;
};

const abbrvState = state => {
  const stateObj = statesAb.filter(s => s.name === state)[0];
  //
  return (stateObj && stateObj.abbreviation)||'';
}
// 
const getCollegesPerState=async (state,search) => {
let data=[]

if(state){
let query=`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${usdatakey}&school.state=${abbrvState(state)}&&_fields=school.name,school.state`
if(search){
  query=`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${usdatakey}&school.state=${abbrvState(state)}&school.name=${search}&_fields=school.name,school.state`
}
  const {data:{results}}= await axios.get(query);

   data =results.map(r=>({name:r['school.name']}))
  }
  
  // console.log('returned: ',data)
  
  return data

}


;

const expandState = abbrv => {
  const stateObj = statesAb.filter(s => s.abbreviation === abbrv)[0];
  // console.log(stateObj)
  return stateObj && stateObj.name;
};

const schema = new PasswordValidator().is()
.min(8) // Minimum length 8
.is()
.max(100) // Maximum length 100
.has()
.uppercase() // Must have uppercase letters
.has()
.lowercase() // Must have lowercase letters
.has()
.digits(); // Must have digits
const truncateSentence = (text, sentenceCount) => `${text.split('.').slice(0, sentenceCount).join('.')}.`;

const statessArray=()=>statesAb.map((s)=>({name:s&&s.name}))

const config ={
    title: `Takesavillage`,
    url: `https://www.takesavillage.com`,
    description: `The # 1 crowdfunding website`,
    twitter: `VillageFunding`,
    linkedin: `company/18007056/admin/`,
    // gaId: `UA-126639314-1`,
    email: `info.takesavillage.com`,
    facebook: `TakesaVillagecom-1231801423529757/`,
    truncateSentence,
    schema,
    getAddress,
    abbrvState,
    expandState,
    statessArray,
    statesAb,
    getCollegesPerState
  }

  export default config