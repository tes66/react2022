import './App.css';
import React, {useEffect, useState, useRef} from 'react';
import Message from './components/Message';
import { createTheme, ThemeProvider }  from "@material-ui/core";
import deepPurple  from "@material-ui/core/colors/deepPurple";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ChatList from './components/Chats';


//тема с цветами
const theme = createTheme({
  palette:{
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: deepPurple[800]
    },
   },
});

const useStyles = makeStyles({
  chat: {
    width: 500,
    height: 500,
    margin: 30,
    padding: 20,
    textAlign: 'left'
    
  },
  chatItem: {
    borderWidth: 1,
    borderBottom: 'outset'
  },
   
});

function App(props) {
  const [messageList, setmessageList] = useState([]);
  const classes = useStyles();
  const inputRef = useRef(null);
  const newChatList = [
    {
        id: 1,
        name: 'Main Chat'
    },
    {
        id: 2,
        name: 'Friend Chat'
    },
    {
        id: 3,
        name: 'Secret Chat'
  }
];


  function NewMessage(pm) {
    setmessageList(messageList => [...messageList, {text: pm, autor: 'Имя'}]);
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);
 
  useEffect(()=> {
    if (messageList[messageList.length - 1]?.autor === 'You') {
    setTimeout(setmessageList, 1500, (messageList => [...messageList, {text: 'i\'m robot?', autor: 'Бот'}]))
    };
    clearTimeout();

  }, [messageList]);

  return (
      <div className="App">
  <ThemeProvider theme={theme}>
      <Message name= {props.name}
      onClick = {NewMessage}
      input={inputRef}
      />
    <ChatList chats = {newChatList} />

      <List className={classes.chat}>
          <ListItem className={classes.chatItem}>
          <ListItemText>#</ListItemText>
          <ListItemText>логи сообщений</ListItemText>
          <ListItemText>автор</ListItemText>
      </ListItem>
      
      {messageList.map((message, idx) => 
      <ListItem className={classes.chatItem} key={idx + 1}> 
          <ListItemText>{idx + 1}</ListItemText>
          <ListItemText>{message.text}</ListItemText>
          <ListItemText>{message.autor}</ListItemText>
      </ListItem>)}
      </List>    
  </ThemeProvider>
  
      </div>
  
  );
}

export default App;