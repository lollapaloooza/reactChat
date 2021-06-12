import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {

    return (
        <main className={classes.AppProfile}>
            <div>
                IMAGE
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </main>
    )
}

export default Profile;