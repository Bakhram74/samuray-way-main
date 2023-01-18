import profileReducer, {AddPostCreator, InitProfileStateType} from "./profile-reducer";
const state = beforeEach(()=>{
    const initProfilePage= {
        post: [
            {id: 1, message: 'Hi how are you', likesCount: 12},
            {id: 2, message: 'Its my post', likesCount: 11}
        ] ,
        profile: null,
        status:"" //todo
    }
    return initProfilePage
})


test('',()=>{

    const action = AddPostCreator('hey there')
  const result = profileReducer(state,action)
    expect(result.post.length).toBe(3)
    expect(result.post[2].message).toBe('hey there')
})