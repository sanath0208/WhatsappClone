import { Avatar, IconButton } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './Chat.css';
import {AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic";
import {useParams} from "react-router-dom";
import db from './firebase'

function Chat() {

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const {roomId} = useParams();
    const [messages, setMessages] = useState([]);
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));
        db.collection('rooms').doc(roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot(snapshot => (
            setMessages(snapshot.docs.map(doc => doc.data()))
        ));
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(input);
        setInput("");
    }

    return (
        <div className="chat">
        
            <div className = "chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                <h3>{roomName}</h3>
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
                {messages.map(message => (
                    <p className="chat_message">
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    <span className="chat_timestamp">
                    {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
                ))}

            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange = {(e) => setInput(e.target.value)} type="text" />
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
