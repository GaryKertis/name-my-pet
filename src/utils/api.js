import savedState from './saved-state.json';

export const api = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(savedState[id]), 500);
  });
}

export const update = (id, name) => {
  savedState[id].name = name;
}
