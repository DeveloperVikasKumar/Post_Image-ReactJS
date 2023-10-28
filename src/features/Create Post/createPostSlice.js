import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    postWarehouse: [
        {
            PostId : '1',
            PostImage : 'https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-a54/lifestyle/-1024w2/gsmarena_001.jpg',
            PostTitle : 'Samsung Galaxy A54',
            isLiked : false,
        }
    ]
}

export const createPostSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {
        addPost : function(state, action) {
            const post = {
                PostId : nanoid(),
                PostImage : action.payload,
                PostTitle : action.payload,
                isLiked : action.payload,
            }
            state.postWarehouse.push(post)
        },
        // editPost : function(state, action) {},
        deletePost : function(state, action) {
            state.postWarehouse = state.postWarehouse.filter((post) => post.PostId !== action.payload)
        },
        // addPostImage : function(state,action) {},
        // addPostTitle : function(state, action) {},
        // likePost : function(state, action) {},
    }
})
export const {addPost, deletePost} = createPostSlice.actions

export default createPostSlice.reducer