import { FloatButton } from 'antd';
import { MessageOutlined } from '@ant-design/icons'
import './App.css';
import { useState } from 'react';
import SimpleForm from './components/SimpleForm';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const onchange = () => {
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <FloatButton
        icon={<MessageOutlined />}
        type="primary"
        style={{
          right: 50,
        }}
        onClick={() => setModalOpen(true)}
      />
      <SimpleForm />
    </>
  );
}

export default App;
