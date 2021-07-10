import {Switch,Route,Redirect} from 'react-router-dom';
import Dashboard from "../../components/dashboard/Dashboard";
import Adder from "../../components/adder/adder";
export function Router(props:any){
    return(
        <Switch>
            <Route path={'/books'}>
                <Dashboard />
            </Route>
            <Route path={'/add'}>
                <Adder />
            </Route>
            <Route path={'/'}>
                <Redirect to={'/books'}></Redirect>
            </Route>
        </Switch>
    )
}
