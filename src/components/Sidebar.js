import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div classname="sidebar_header"></div>
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            <div classname="sidebar_search"></div>
            <div classname="sidebar_chats"></div>
        </div>
    )
}
export default Sidebar