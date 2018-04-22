const INITIAL_STATE = {
    description: 'Ler livro',
    list: [
        {
            _id: 1,
            description: 'Casa da vo',
            done: false
        },
        {
            _id: 2,
            description: 'Andar de mota',
            done: true
        },
        {
            _id: 3,
            description: 'Sair de casa',
            done: false
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state    
    }
}