import { applyMiddleware, createStore } from 'redux';
import { reducer } from './features/todo';
import thunk from 'redux-thunk';
const { createLogger } = require('redux-logger');

const logger = createLogger({
  diff:true,
  collapsed: true
})

export const store = createStore(reducer, applyMiddleware(thunk, logger));