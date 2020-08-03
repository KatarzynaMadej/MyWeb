import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../styles/_header.sass';

import img01 from '../images/book05.jpg';
import img02 from '../images/book02.jpg';
import img03 from '../images/book03.jpg';
import img04 from '../images/book04.jpg';
import img05 from '../images/book01.jpg';


const Header = () => {
  return (
    <>
      <Switch >
        <Route exact path='/'
          render={() => (<img src={img01} alt='start' />)
          }
        /> <Route path='/history'
          render={() =>
            (<img src={img02} alt='history' />
            )}
        />
        <Route path='/search' render={
          () => (<img src={img03} alt='szukaj' />
          )} />
        <Route path='/logpage' render={() =>
          (<img src={img04} alt='zaloguj' />
          )} />
        <Route path='/contact' render={() => (
          <img src={img05} alt='kontakt' />
        )} />
      </Switch>
    </>
  );
}

export default Header;
