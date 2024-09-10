const _apiCall = require("../lib/apiCall.js")

const schedulerEncounter = () => {
    _apiCall.schedulerEncounter()
}

const schedulerLabEncounter = () => {
    _apiCall.schedulerLabEncounter()
}

const schedulerEncounterDuplicate = () => {
    _apiCall.schedulerEncounterDuplicate()
}

const schedulerItemEncounter = () => {
    _apiCall.schedulerItemEncounter()
}


module.exports = {
    schedulerEncounter,
    schedulerLabEncounter,
    schedulerEncounterDuplicate,
    schedulerItemEncounter
}