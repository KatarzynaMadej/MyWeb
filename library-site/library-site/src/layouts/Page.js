import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/_page.sass';
import Start from '../pages/Start';
import History from '../pages/History';
import Search from '../pages/Search';
import LogPage from '../pages/LogPage';
import Contact from '../pages/Contact';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Start} />
                <Route path="/history" component={History} />
                <Route path="/search" component={Search} />
                <Route path="/logpage" component={LogPage} />
                <Route path="/contact" component={Contact} />

                {/* <Route component={ErrorPage} /> */}
            </Switch>
        </>
    )
};

export default Page;