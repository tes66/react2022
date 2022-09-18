import React, {useState} from 'react';
import '../App.css';

function MyMessage(props){
  const [Textform, setTextform] = useState('');
  
 function EntNewMessage(event){
    setTextform(event.target.value)
  };

  const handleClick = () => props.onClick(Textform);

   return (
    <div className="Message-text">
     <h3>Новые сообщения{props.name}!</h3>
     <form className="Message-form" action="#">
    <input className="Message-input" value={Textform} onChange={EntNewMessage} type="text" placeholder="Введите сообщение"></input>
    <button type="button" className="Message-btn"  onClick={handleClick}>Отправить сообщение</button> 
    </form>
     
     </div>
   
  );
}

export default MyMessage;