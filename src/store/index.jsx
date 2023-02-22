import React from 'react'
import { createGlobalState } from 'react-hooks-global-state'
import moment from 'moment'

const {setGlobalState, getGlobalState, useGlobalState} = createGlobalState({
    createModal: "scale:0",
    connectedAccount: "",
    contract: null,
    proposals: [],
    isStakeholder: false,
    balance: 0,
    myBalance: 0
})

const truncate = (text, startChar, endChar, maxLength) => {
    if(text.length < maxLength) {
        let start = text.subString(0, startChar)
        let end = text.subString(text.length-endChar, text.length)
        while(start.length+end.length<maxLength) {
            start = start+"."
        }
        return start+end
    }
    return text
}

const daysRemaining = (days) => {
    const todaydate = moment()
    days = Number((days + '000').slice(0))
    days = moment(days).format('YYYY-MM-DD')
    days = moment(days)
    days = days.diff(todaydate, "days")
    return days == 1 ? "1 day": days+ "days"
}

export {
    truncate,
    setGlobalState,
    useGlobalState,
    getGlobalState,
    daysRemaining
}