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