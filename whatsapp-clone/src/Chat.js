import { Avatar, IconButton } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './Chat.css';
import {AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic";

function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    return (
        <div className="chat">
        
            <div className = "chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last Seen at ...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Sanath</span>
                    Hey Guys
                    <span className="chat_timestamp">11:52AM</span>
                </p>

            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input type="text" />
                    <button type="submit">Send a Message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
