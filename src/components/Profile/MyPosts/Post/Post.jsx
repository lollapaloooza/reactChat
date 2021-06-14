import classes from './Post.module.scss';

function Post(props) {

    return (
        <div className={classes.item}>
            <img src="https://i.ebayimg.com/images/g/t78AAOSw2sFdGt-s/s-l1600.jpg"
                 alt="profile photo"/>
            {props.post.message}
            <div>
                <span>{props.post.likesCount} like</span>
            </div>
        </div>
    )
}

export default Post;