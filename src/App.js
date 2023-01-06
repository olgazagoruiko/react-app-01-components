import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends/FriendList';
import Transactions from './components/transactions/Transactions';
import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friends/friends.json';
import transactions from "./components/transactions/transaction.json";

function App() {
  return (
    <div className="container">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      {/* <Statistics stats={data} /> */}
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions}/>
    </div>
  );
}

export default App;
