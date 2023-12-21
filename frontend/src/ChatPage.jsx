import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatPage = (props) => {
    const chatProps = useMultiChatLogic(
        'cbb41d2e-eec6-4f4f-a955-2b48c815c535',
        props.user.username,
        props.user.secret
    )
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
}

export default ChatPage