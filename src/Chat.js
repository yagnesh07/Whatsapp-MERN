import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticonOutlined, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Chat.css';

function Chat() {

    //time 
    let d = new Date()
    let h = `${d.getHours() % 12}`.padStart(2, '0')
    let m = `${d.getMinutes()}`.padStart(2, '0')
    let s = `${d.getSeconds()}`.padStart(2, '0')

    let displayDate = h + ":" + m

    return (
        <div className = "chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className = "chat__message">
                    <span className = "chat__name">Yagnesh</span>
                    This is a message
                    <span className = "chat__timestamp">
                        {displayDate}
                    </span>
                </p>

                <p className = "chat__message chat__reciever">
                    <span className = "chat__name">Yagnesh</span>
                    This is a message
                    <span className = "chat__timestamp">
                        {displayDate}
                    </span>
                </p>

                <p className = "chat__message">
                    <span className = "chat__name">Yagnesh</span>
                    This is a message
                    <span className = "chat__timestamp">
                        {displayDate}
                        {/* `${new Date().getHours() % 12} : ${new Date().getMinutes()}` */}
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonOutlined />
                <form>
                    <input placeholder = "Type a message" type="text"/>
                    <button type = "submit">Send a message</button>
                </form>
                <MicOutlined />
            </div>
        </div>
    )
}

export default Chat
