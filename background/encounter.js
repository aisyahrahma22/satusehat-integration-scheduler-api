import cron from 'node-cron'
const Jobs = require('./jobs')

const runSchedulerEnCounter = () => {
    cron.schedule('0 * * * *', () => { // run every one hour
        console.log('Run schedulerEncounter')
        Jobs.schedulerEncounter()
    })
}

const runSchedulerEnCounterDuplicate = () => {
    cron.schedule('0 * * * *', () => { // run every one hour
        console.log('Run Duplicate schedulerEncounter')
        Jobs.schedulerEncounterDuplicate()
    })
}

const runSchedulerItemEnCounter = () => {
    cron.schedule('0 * * * *', () => { //  run every one hour
        console.log('Run schedulerItemEncounter')
        Jobs.schedulerItemEncounter()
    })
}

const runSchedulerLabEnCounter = () => {
    cron.schedule('0 * * * *', () => { // run every one hour
        console.log('Run Lab schedulerEncounter')
        Jobs.schedulerLabEncounter()
    })
}

module.exports = {
    runSchedulerEnCounter,
    runSchedulerEnCounterDuplicate,
    runSchedulerItemEnCounter,
    runSchedulerLabEnCounter
}
