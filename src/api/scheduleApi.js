import request from '../axios/index'

export const getScheduleById = (stratTime, endTime) => request.post('getScheduleById', { stratTime: stratTime, endTime: endTime })

export const getWordToUById = (uId) => request.post('getWordToUById', { uId: uId })