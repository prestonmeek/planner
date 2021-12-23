// https://typeofnan.dev/your-first-react-typescript-project-todo-app/

import React from 'react'
import App from './App'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import './index.css';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root')
)