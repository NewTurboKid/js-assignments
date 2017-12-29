import React, { Component } from 'react';
import './Task.css';
import Info from './Info';
import Photo from './Photo';
import Name from './Name';
import Nickname from './Nickname';
import Contacts from './Contacts/Contacts'

class Task extends Component {
    render(){
        return(
            <div className="Task">
              <Photo />
              <Name name='Hololovich Andrey'/>
              <Nickname nickName='NewKidTurbo'/>
              <Info info='Worst studen ever.'/>
              <Contacts icon ="address-book-o" text="@BSTU" />
              <Contacts icon ="map-marker" text="Brest" />
              <Contacts icon ="envelope-o" text="Andreysxs@gmail.com" />
              <Contacts icon ="link" text="vk.com" />
            </div>
        );
    }
}

export default Task;