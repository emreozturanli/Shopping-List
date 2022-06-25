export const reducer = (state,action) => {
  switch (action.type){
    case 'ADD_ITEM':
        const newList = [...state.list,action.payload]
        return {
            ...state,
            list: newList,
            isAlert : true,
            alertText: 'New item added ✔'
        }
    case 'NOTHING_TO_ADD':
        return {
            ...state,
            isAlert: true,
            alertText: 'Please type something...'
        }
    case 'HIDE_ALERT':
        return {
            ...state,
            isAlert: false,
        }
    case 'REMOVE_ITEM':
        const newList2 = state.list.filter((e)=> e.id !== action.payload )
        return {
            ...state,
            list: newList2,
            isAlert: true,
            alertText: 'Item removed from the list ✔'
        }
    case 'ALREADY_EXIST':
        
        return {
            ...state,
            isAlert: true,
            alertText: `'${action.payload}' is alredy in the list`
        }
    default:
        throw new Error('error occured');
  }

}
