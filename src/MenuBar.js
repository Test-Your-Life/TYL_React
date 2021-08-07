import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Investment from './Investment';
import Ranking from './Ranking';

// https://velog.io/@pkbird/React-Router-1

function Menubar() {
    return (
        <div className="Menubar">
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/Investment">투자</Link>
                </li>
                <li>
                    <Link to="/Ranking">랭킹</Link>
                </li>
            </ul>
            <Route path="/" component={Home} exact />
            <Route path="/Investment" component={Investment} />
            <Route path="/Ranking" component={Ranking} />
        </div>
    );
}

export default Menubar;