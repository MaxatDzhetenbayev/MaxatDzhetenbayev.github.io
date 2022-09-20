export const SET_SEARCH = '@@/controls/SET_SEARCH'
export const SET_FILTER = '@@/controls/SET_FILTER'

export const setSearch = (search) => ({
   type: SET_SEARCH,
   payload: search
})

export const setFilter = (filter) => ({
   type: SET_FILTER,
   payload: filter
})

