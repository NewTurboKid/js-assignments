import React, { Component } from 'react';
import Photo from '../Info/Photo';
import Name from './Name';
import Nickname from './Nickname';
import Info from './Info';
import Contacts from './Contacts/Contacts';


class MainInf extends Component {
  render() {
    return (
      <div className="MainInf">
        <Photo />
        <Name name='Hololovich Andrey'/>
        <Nickname nickname='NewKidTurbo'/>
        <Info info='Wrost student ever.'/>
        <Contacts icon="university" text="@BSTU"/>
        <Contacts icon="map-marker" text="Belarus, Brest"/>
        <Contacts icon="envelope-o" text="Andreysxs@gmail.com"/>
        <Contacts icon="link" text="vk.com"/>
      </div>
    );
  }
}

export default MainInf;