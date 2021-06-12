import classes from './MyPosts.module.scss'
import Post from "./Post/Post";

function MyPosts() {

    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;