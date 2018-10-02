import Histories from "../histories/histories";

export const matchHistoryAndPatients = ( histories ) => {
    return histories.map(item => ({...item, name: api.getNameByID(item.userID)}))
}