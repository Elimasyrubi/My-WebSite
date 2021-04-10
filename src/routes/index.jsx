import { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import not found
//import loader
//import Routes from './routes'
//VIEWS
import Home from '../views/home/container';
import Layout from '../layout/Layout';


export default function Routes() {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}