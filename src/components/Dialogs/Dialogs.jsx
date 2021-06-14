import classes from './Dialogs.module.scss';
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";


function Dialogs(props) {

    let dialogsData = [
        {id: 1, name: "Rustam"},
        {id: 2, name: "Tahir"},
        {id: 3, name: "Elder"},
        {id: 4, name: "Sardar"},
        {id: 5, name: "Amir"}
    ];

    let messagesData = [
        {message: "Hello dude"},
        {message: "Hello dude"},
        {message: "Hello dude"},
        {message: "Hello dude"},
        {message: "Hello dude"}
    ];

    return (
        <div className={classes.Dialogs}>
            <DialogsItems dialogs={dialogsData}/>
            <Messages messages={messagesData}/>
        </div>
    )
}

export default Dialogs;