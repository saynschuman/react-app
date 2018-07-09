import {DELETE_ARTICLE, SAVE_DAYS} from "../constants";

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function saveDaysRange(days) {
    return {
        type: SAVE_DAYS,
        payload: {days}
    }
}

export function resetDaysRange() {
    return {
        type: 'RESET'
    }
}