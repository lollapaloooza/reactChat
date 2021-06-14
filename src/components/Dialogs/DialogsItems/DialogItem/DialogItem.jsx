import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = `/dialogs/${props.dialog.id}`;

    return (
        <div className="">
            <NavLink to={path}>{props.dialog.name}</NavLink>
        </div>
    )
}

export default DialogItem;