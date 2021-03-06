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
  },
  activeAdminPanel: (dataUser) => {
    return function (dispatch, getState) {
      let states = getState();
      let dataAdmin = states.adminPanelData.adminData;
      if(dataAdmin.login == dataUser.login && dataAdmin.password == dataUser.password){
        dispatch({
            type: 'ACTION_ADMINPANEL'
          });
        }else {
          null;
        }
    };
  },
  activeAdminFilter: (element) => {
    const value = element.target.dataset.id;
    console.log(value);
    return function (dispatch, getState) {
      dispatch({
          type: 'ACTION_FILTER',
          data: value
        });
    };
  },
  createNewPost: (value) => {
    console.log(value);
    return function (dispatch, getState) {
      let states = getState();
      let dataAdmin = states.PostData.arrPost;
      console.log(dataAdmin);
      dispatch({
          type: 'CREATE',
          data: value
        });
    };

  }
};

export default demoActionCreator;
