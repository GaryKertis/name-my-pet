import savedState from './saved-state.json';

/**
 Sample usage:
 api(1).then(console.log);  // Object { name: "Babs", type: "baboon" }
 */
export const api = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(savedState[id]), 500);
  });
}

export const update = (id, name) => {
  savedState[id].name = name;
}
