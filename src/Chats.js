import { Avatar } from '@mui/material';
import React from 'react';
import './Chats.css';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Chats() {
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon />
                    <input type="text" placeholder="Friends" />
                </div>
                <ChatBubbleIcon className="chats__chatIcon" />
            </div>

            <div className="chat__posts">
                
            </div>
        </div>
    )
}

export default Chats
