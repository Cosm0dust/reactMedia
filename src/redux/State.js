const state = {
    profile: {
        posts:  [
            {id: 1, subject: 'Love', text:'Need some love...', date: Date.now(), likesCount: 128},
            {id: 2, subject: 'Love', text:'Need some love...', date: Date.now(), likesCount: 128},
            {id: 3, subject: 'Love', text:'Need some love...', date: Date.now(), likesCount: 128},
            {id: 4, subject: 'Love', text:'Need some love...', date: Date.now(), likesCount: 128},
            {id: 5, subject: 'Love', text:'Need some love...', date: Date.now(), likesCount: 128},
        ]
    },
    messages: {
        names : [
            {id:1, name:'Ivan'},
            {id:2, name:'Kolya'},
            {id:3, name:'Lada'},
            {id:4, name:'Alya'},
            {id:5, name:'Anya'}
        ],
        message: [
            {id:1, message: 'Hello'},
            {id:1, message: 'How are you?'},
            {id:1, message: 'Where are you?'},
            {id:1, message: 'Good job!'},
            {id:1, message: 'You are the best))'},
        ],
    }
}

export const addPost = (postMesage) => {
    let newPost = {
        id:10,
        subject: 'Love',
        text: postMesage,
        date: Date.now(),
        likesCount: 0,
    }

    state.profile.posts.push(newPost)
}

export default state;