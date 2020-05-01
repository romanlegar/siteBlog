import { combineReducers } from 'redux';

const AdminPanelState = {
  admin: false
};

function adminPanelData( state = AdminPanelState, action){
  switch( action.type ){
    case 'ACTION_FILTER':
    return {
      ...state,
      activeFilters: action.data
    }
    default:
      return state;
  }
};


const headerState = {
  nameSite: 'Popular Front',
  filters: ['all', 'analytics', 'history', 'news'],
  activeFilters: 'all'
};
function headerData( state = headerState, action){
  switch( action.type ){
    case 'ACTION_FILTER':
    return {
      ...state,
      activeFilters: action.data
    }
    default:
      return state;
  }
};
const postState = {
  arrPost: [{headline: 'Test', postLink:'postLink1', category: 'news', postImg: 'https://i.pinimg.com/originals/ed/1f/ca/ed1fca6facf4a6a15b65f06e41ecc373.jpg', content:{headline:'Tema', text:'text'}}, {headline: 'Test', postLink:'postLink2', category: 'news', postImg: 'https://i.pinimg.com/originals/ed/1f/ca/ed1fca6facf4a6a15b65f06e41ecc373.jpg', content:{headline:'Tema', text:'text'}}, {headline: 'Test', postLink:'postLink3', category: 'news', postImg: 'https://i.pinimg.com/originals/ed/1f/ca/ed1fca6facf4a6a15b65f06e41ecc373.jpg', content:{headline:'Tema', text:'text'}}, {headline: 'Test', postLink:'postLink4', category: 'news', postImg: 'https://i.pinimg.com/originals/ed/1f/ca/ed1fca6facf4a6a15b65f06e41ecc373.jpg', content:{headline:'Tema', text:'text'}}, {headline: 'Test', postLink:'postLink5', category: 'news', postImg: 'https://i.pinimg.com/originals/ed/1f/ca/ed1fca6facf4a6a15b65f06e41ecc373.jpg', content:{headline:'Tema', text:'text'}}, {headline: 'Test', postLink:'postLink6', category: 'news', postImg: 'https://i.pinimg.com/originals/ed/1f/ca/ed1fca6facf4a6a15b65f06e41ecc373.jpg', content:{headline:'Tema', text:'text'}}, {headline: 'Test', postLink:'postLink1', category: 'news', postImg: 'https://i.pinimg.com/originals/ed/1f/ca/ed1fca6facf4a6a15b65f06e41ecc373.jpg', content:{headline:'Tema', text:'text'}}]
};
function PostData( state = postState, action ){
  switch( action.type ){
    default:
      return state;
  }
};
const usersInitialState = {
  loading: false,
  loaded: false,
  data: [],
  errors: []
};

function Users( state = usersInitialState, action){
  switch( action.type ){

    case 'REQUEST':
      return  {
        ... state,
        loading: true
      }

    case 'RESPONSE':
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true
      };

    case 'ERROR':
      return {
        ...state,
        errors: action.error
       };

    default:
      return state;
  }
}


const reducer = combineReducers({
  Users,
  headerData,
  PostData,
  adminPanelData
});

export default reducer;
