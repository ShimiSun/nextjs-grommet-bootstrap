const truncateSentence = (text, sentenceCount) => `${text.split('.').slice(0, sentenceCount).join('.')}.`;

module.exports = {
    title: `Takesavillage`,
    url: `https://www.takesavillage.com`,
    description: `The # 1 crowdfunding website`,
    twitter: `VillageFunding`,
    linkedin: `company/18007056/admin/`,
    // gaId: `UA-126639314-1`,
    email: `info.takesavillage.com`,
    facebook: `TakesaVillagecom-1231801423529757/`,
    truncateSentence,
  }