import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react";

export default observer(() => {
  return (
    <>
      <Routes>
        <Route path="/download" element={<Download></Download>}></Route>
      </Routes>
    </>
  );
});
