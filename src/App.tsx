import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Download, Home, SharePage } from '@/pages';

export default observer(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/sharepage" element={<SharePage />} />
      </Routes>
    </>
  );
});
