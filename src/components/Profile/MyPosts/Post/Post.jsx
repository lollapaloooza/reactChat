import classes from './Post.module.scss';

function Post(props) {

    return (
        <div className={classes.item}>
            <img src="https://i.ebayimg.com/images/g/t78AAOSw2sFdGt-s/s-l1600.jpg"
                 alt="profile photo"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;