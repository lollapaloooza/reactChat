import classes from './ProfileInfo.module.scss';

function ProfileInfo() {

    return (
        <div className={classes.ProfileInfo}>
            <div>
                <img
                    className={classes.WallpaperImg}
                    src="https://wallpaperaccess.com/full/1553880.jpg"
                    alt="Profile Wallpaper"/>
            </div>
            <div className={classes.DescriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;