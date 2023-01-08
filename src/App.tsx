import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Download, Home } from '@/pages';

export default observer(() => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </>
  );
});
