import './App.css';
import Table from './components/Table'
import List from './components/List'
// import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <h1>Веб-сторінка</h1>
      <Table></Table>
      <button type="button" class="btn btn-dark">Dark Button</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <p></p>
      <span class="badge rounded-pill text-bg-dark">Dark</span>
      <p></p>
      <List></List>
      <p></p>
      <button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
}

export default App;
