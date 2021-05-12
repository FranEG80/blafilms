import { useCallback, useReducer } from "react"

const ACTIONS = {
    RECEIVED_DATA: 1,
    RESET_DATA: 2,
    CHANGE_PAGE: 3
}

const ACTIONS_REDUCER = {
    [ACTIONS.RECEIVED_DATA]: (state, {payload}) => {
        const {data, hasMore, error} = payload
        return {
            ...state,
            data, 
            hasMore,
            error,
        }
    },
    [ACTIONS.RESET_DATA]: () => INITIAL_STATE,
    [ACTIONS.CHANGE_PAGE]: (state, {payload}) => {
        return {
            ...state,
            actualPage: payload.toPlus ? state.actualPage++ : state.actualPage--
        }
    }
}

const REDUCER = (state, action) => {
    const actionReducer = ACTIONS_REDUCER[action.type]
    return actionReducer ? actionReducer(state, action) : state
}

export const INITIAL_PAGE = 1 
const INITIAL_STATE = {
    error: false,
    actualPage: INITIAL_PAGE,
    data: [],
    hasMore: false,
}

const useSearchFilms = () => {
    const [state, dispatch] = useReducer(REDUCER, INITIAL_STATE)

    return {
        ...state,
        receivedData: useCallback(data => dispatch({type: ACTIONS.RECEIVED_DATA, payload: data}), []),
        resetData: useCallback(() => dispatch({type: ACTIONS.RESET_DATA, payload: {}}), []),
        handleChangePage: useCallback((data) => dispatch({type: ACTIONS.CHANGE_PAGE, payload: data}), [])
    }
}

export default useSearchFilms