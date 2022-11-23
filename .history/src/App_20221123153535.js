import { FloatButton } from 'antd';
import './App.css';

function App() {
  return (
    <>
      <FloatButton 
       icon={<MessageOutlined />}
       type="default"
       style={{
         right: 94,
       }}
      onClick={() => console.log('click')}
       />
    </>
  );
}

export default App;
