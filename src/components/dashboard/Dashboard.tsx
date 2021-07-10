import {Link} from 'react-router-dom';
import {DashboardTable} from "./dashboard-components/dashboard-table";
import './Dashboard.scss';
export default function Dashboard(){
    return(
        <div className={'dashboard'}>
            <Link to={'/add'}>Add New Book</Link>
            <DashboardTable />
        </div>
    )
}
