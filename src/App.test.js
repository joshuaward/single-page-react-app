import { render as rtlRender, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

const render = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return rtlRender(ui, {wrapper: Router})
}