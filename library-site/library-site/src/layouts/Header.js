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
          render={() => (<img src={img01} alt='książki' />)
          }
        /> <Route exact path='/'
          render={() =>
            (<img src={img02} alt='książki' />
            )}
        />
        <Route exact path='/' render={
          () => (<img src={img03} alt='książki' />
          )} />
        <Route exact path='/' render={() =>
          (<img src={img04} alt='książki' />
          )} />
        <Route exact path='/' render={() => (
          <img src={img05} alt='książki' />
        )} />
      </Switch>
    </>
  );
}

export default Header;
