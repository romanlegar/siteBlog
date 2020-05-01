const demoActionCreator = {
  doSomsng: () => {
    return function (dispatch, getState) {
      dispatch({
          type: 'ACTION_TYPE',
          payload: ['some', 'data']
        });
    };
  },
  activeFilter: (element) => {
    const value = element.target.dataset.value;
    return function (dispatch, getState) {
      dispatch({
          type: 'ACTION_FILTER',
          data: value
        });
    };
  }
};

export default demoActionCreator;
