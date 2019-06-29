export default {
    posts: [],
    events: [
        {
            id: 1234,
            label: 'modified post "Hello World"',
            createdAt: '2019-01-10T17:15:56.000Z',
            author: {
                name: 'John Doe',
                email: 'jitewaboh@lagify.com',
            },
        },
        {
            id: 1233,
            label: 'created new post "Hello World"',
            createdAt: '2019-01-10T16:34:00.000Z',
            author: {
                name: 'John Doe',
                email: 'jitewaboh@lagify.com',
            },
        },
        {
            id: 1232,
            label:
                'commented "I don\'t agree. You should never try to do things this way, or you\'ll end up in a bad place."',
            createdAt: '2019-01-09T15:53:56.000Z',
            author: {
                name: 'Lela Feng',
                email: 'lelafeng@example.com',
            },
        },
        {
            id: 1231,
            label: 'deleted comment "Totally."',
            createdAt: '2019-01-09T11:04:56.000Z',
            author: {
                name: 'Brandon Hood',
                email: 'brandon@example.com',
            },
        },
        {
            id: 1230,
            label: 'liked "Lorem Ipsum"',
            createdAt: '2019-01-09T09:12:56.000Z',
        },
        {
            id: 1224,
            label: 'modified post "Lorem Ipsum"',
            createdAt: '2019-01-07T16:15:56.000Z',
            author: {
                name: 'John Doe',
                email: 'jitewaboh@lagify.com',
            },
        },
        {
            id: 1223,
            label: 'created new post "Lorem Ipsum"',
            createdAt: '2019-01-06T15:34:00.000Z',
            author: {
                name: 'John Doe',
                email: 'jitewaboh@lagify.com',
            },
        },
        {
            id: 1222,
            label: 'deleted comment "Super Bueno!"',
            createdAt: '2019-01-06T11:04:56.000Z',
            author: {
                name: 'Brandon Hood',
                email: 'brandon@example.com',
            },
        },
        {
            id: 1221,
            label: 'commented "Super bueno!"',
            createdAt: '2019-01-06T09:53:56.000Z',
            author: {
                name: 'Johnny B. Good',
                email: 'johnny@example.com',
            },
        },
        {
            id: 1220,
            label: 'liked "Sic dolor"',
            createdAt: '2019-01-05T09:12:56.000Z',
        },
        {
            id: 1214,
            label: 'modified post "Sic dolor"',
            createdAt: '2019-01-05T07:15:56.000Z',
            author: {
                name: 'John Doe',
                email: 'jitewaboh@lagify.com',
            },
        },
        {
            id: 1213,
            label: 'created new post "Sic dolor"',
            createdAt: '2019-01-03T16:34:00.000Z',
            author: {
                name: 'John Doe',
                email: 'jitewaboh@lagify.com',
            },
        },
        {
            id: 1212,
            label: 'commented "If only this could be true..."',
            createdAt: '2019-01-03T15:53:56.000Z',
            author: {
                name: 'Lela Feng',
                email: 'lelafeng@example.com',
            },
        },
    ],
    folks:[
        { id:1,
          category:'student',
          name: "Alan Souza",
          imageUrl:
            "https://s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80",
            story:{
                amount:2100,
                goal:30000,
                cover:"https://images.pexels.com/photos/129062/pexels-photo-129062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                title:"Dreaming College",
                story:"I have just finished my high school and looking forward to do computer science at Michighan state university"
            }
           
        },
        {
          id:2,
          category:'student',
          name: "Bryan Jacquot",
          imageUrl:
            "https://s.gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80",
            story:{
                amount:7100,
                goal:35000,
                cover:"https://images.pexels.com/photos/40065/woman-detail-bed-jeans-40065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                title:"Dreaming College",
                story:"I have just finished my high school and looking forward to do computer science at Michighan state university"
            }
        },
        {
          id:3,
          category:'guardian',
          name: "Chris Carlozzi",
          imageUrl:
            "https://s.gravatar.com/avatar/56ea1e2ecd0d3cc85479b2d09e31d071?s=80",
            story:{
                amount:100,
                goal:7000,
                cover:"https://images.pexels.com/photos/266004/pexels-photo-266004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                title:"Optimistic Researcher",
                story:"Creg is an amazing creature... Very inquisitive and teachable. She loves reading. Hope you and me can help save his future. I launched this campaign, hoping that amazing people like you would donate to his cause. Blessings"
            }
        },
        {
          id:4,
          category:'guardian',
          name: "Eric Soderberg",
          imageUrl:
            "https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80",
            story:{
                amount:2900,
                goal:8300,
                title:"The Surgeon in the making",
                story:"It's evident that Drake's entire being dictates that he wants to be the Surgeon. He is 7th grade but already acquainted with most mamal organs. As his granny mother, this inspires me to run this campaign for him. Will you join me as we support this Wizard please?"
            }
        },
        {
          id:5,
          category:'student',
          name: "Marlon Parizzotto",
          imageUrl:
            "https://s.gravatar.com/avatar/e6684969375a4dcc0aa99f0bfae544c3?s=80",
            story:{
                amount:0,
                goal:30000,
                cover:"https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                title:"Dreaming College",
                story:"I have just finished my high school and looking forward to do computer science at Michighan state university"
            }
        },
        {
          id:6,
          category:'financial educator',
          name: "Tales Chaves",
          imageUrl:
            "https://s.gravatar.com/avatar/1f80adca55d9f5d97932ff97f631a4e8?s=80",
            license:{
              
                aboutFA:"If you want your campaign to succeed, you need to connect with someone who has been in this field for a while. Not only have I been a financial advisor for 6 full years but I also went through college by running an education crowdfunding campaign. I bet you are looking for someone like me"
            }
        },
        {
          id:7,
          category:'student',
          name: "Tracy Barmore",
          imageUrl:
            "https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3?s=80",
            story:{
                amount:2100,
                goal:5000,
                cover:"https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                title:"Dreaming College",
                story:"I have just finished my high school and looking forward to do computer science at Michighan state university"
            }
        }
      ]
}

/**
 * // language agnostic events that support internalization
 * 
 * const events = [
    {
        id: 1234,
        object: 'post',
        objectName: 'Hello World',
        type: 'modify',
        createdAt: '2019-01-10T17:15:56.000Z',
        author: {
            name: 'John Doe',
            email: 'jitewaboh@lagify.com',
        },
    },
    {
        id: 1233,
        object: 'post',
        objectName: 'Hello World',
        type: 'create',
        createdAt: '2019-01-10T16:34:00.000Z',
        author: {
            name: 'John Doe',
            email: 'jitewaboh@lagify.com',
        },
    },
    ...
];
 */