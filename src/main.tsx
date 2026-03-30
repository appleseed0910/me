import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// // 初始化
// document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px'; 
// // 以 375 为标准比例，等比放大缩小 1rem对应的大小，1rem即html的fontSize

// // 放大缩小的时候刷一下
// window.addEventListener('resize', () => {
//   document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px'; 
// })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
