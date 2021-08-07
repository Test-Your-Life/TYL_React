import './App.css';
import MenuBar from './MenuBar';
import { BrowserRouter } from 'react-router-dom'; // 이거를 왜 다른데에 놓으면 에러가 나올까.

function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
