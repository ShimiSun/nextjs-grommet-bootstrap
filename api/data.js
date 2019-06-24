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
           
        },
        {
          id:2,
          category:'student',
          name: "Bryan Jacquot",
          imageUrl:
            "https://s.gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80"
        },
        {
          id:3,
          category:'guardian',
          name: "Chris Carlozzi",
          imageUrl:
            "https://s.gravatar.com/avatar/56ea1e2ecd0d3cc85479b2d09e31d071?s=80"
        },
        {
          id:4,
          category:'guardian',
          name: "Eric Soderberg",
          imageUrl:
            "https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80"
        },
        {
          id:5,
          category:'student',
          name: "Marlon Parizzotto",
          imageUrl:
            "https://s.gravatar.com/avatar/e6684969375a4dcc0aa99f0bfae544c3?s=80"
        },
        {
          id:6,
          category:'financial educator',
          name: "Tales Chaves",
          imageUrl:
            "https://s.gravatar.com/avatar/1f80adca55d9f5d97932ff97f631a4e8?s=80"
        },
        {
          id:7,
          category:'student',
          name: "Tracy Barmore",
          imageUrl:
            "https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3?s=80"
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