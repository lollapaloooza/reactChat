import Message from "./Message/Message";

function Messages(props) {

    return (
        <div className="">
            {
                props.messages.map((i, index) => {
                    return (
                        <Message message={i} key={index + 'message'}/>
                    )
                })
            }
        </div>
    )
}

export default Messages;