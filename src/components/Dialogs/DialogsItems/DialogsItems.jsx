import DialogItem from "./DialogItem/DialogItem";


function DialogsItems(props) {

    return (
        <div className="DialogsItems">
            {
                props.dialogs.map((i, index) => {
                    return (
                        <DialogItem dialog={i} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default DialogsItems;