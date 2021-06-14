import classes from './MyPosts.module.scss'
import Post from "./Post/Post";

function MyPosts() {

    let postsData = [
        {id: 1, message: "Wassup?", likesCount: "5"},
        {id: 2, message: "Wassup?", likesCount: "5"},
        {id: 3, message: "Wassup?", likesCount: "5"},
        {id: 4, message: "Wassup?", likesCount: "5"},
        {id: 5, message: "Wassup?", likesCount: "5"}
    ];

    return (
        <div className={classes.MyPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"/>
                </div>
                <div>
                    <button type="button">Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                    postsData.map(i => {
                        return (
                            <Post post={i} key={i.id + 'post'}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyPosts;