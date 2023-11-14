import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    postWarehouse: [
        {
            PostId : '1',
            PostImageURL : 'https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-a54/lifestyle/-1024w2/gsmarena_001.jpg',
            PostTitle : 'Samsung Galaxy A54',
            isLiked : false,
        },
        {
            PostId : '2',
            PostImageURL : 'https://fdn.gsmarena.com/imgroot/reviews/23/motorola-edge-40-neo/lifestyle/-1024w2/gsmarena_001.jpg',
            PostTitle : 'Motorola Edge 40 Neo',
            isLiked : true,
        },
        {
            PostId : '3',
            PostImageURL : 'https://fdn.gsmarena.com/imgroot/reviews/22/motorola-edge-30-neo/lifestyle/-1024w2/gsmarena_001.jpg',
            PostTitle : 'Motorola Edge 30 Neo',
            isLiked : false,
        },
        {
            PostId : '5',
            PostImageURL : 'https://fdn.gsmarena.com/imgroot/reviews/23/moto-g84/lifestyle/-1024w2/gsmarena_007.jpg',
            PostTitle : 'Motorola Moto G84',
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
                PostTitle : action.payload[0],
                PostImageURL : action.payload[1],
                isLiked : false,
            }
            state.postWarehouse.push(post)
        },
        // editPost : function(state, action) {},
        deletePost : function(state, action) {
            state.postWarehouse = state.postWarehouse.filter((post) => post.PostId !== action.payload)
        },
        likePost : function(state, action){
            state.postWarehouse.filter((post) => {
                if(post.PostId === action.payload){
                    console.log(post.PostId)
                    if(post.isLiked == false){
                        post.isLiked = true
                    }else{
                        post.isLiked = false
                    }
                }
            })
            
        }
        // addPostImage : function(state,action) {},
        // addPostTitle : function(state, action) {},
        // likePost : function(state, action) {},
    }
})
export const {addPost, deletePost, likePost} = createPostSlice.actions

export default createPostSlice.reducer