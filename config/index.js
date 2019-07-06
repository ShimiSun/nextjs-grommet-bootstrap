import PasswordValidator from 'password-validator';

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
  }

  export default config