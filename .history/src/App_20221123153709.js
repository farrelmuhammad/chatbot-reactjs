import { FloatButton } from 'antd';
import { MessageOutlined } from '@ant-design/icons'
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
