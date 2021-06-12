import classes from "./Profile.module.scss";

function Profile() {

    return (
        <main className={classes.AppProfile}>
            <div>
                IMAGE
            </div>
            <div>
                ava + desc
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile;