const Jobs = require('./jobs');
const cron = require('node-cron');
const moment = require("moment");

cron.schedule('0 0 0 * * *', () => { //every day at 00:00
    const dt= new Date(Date.now());
    const date = dt.toISOString().split('T')[0];
    
});

cron.schedule('0 */5 * * * *', () => { //every 5 minutes
    const dt= new Date(Date.now());
    const date = dt.toISOString().split('T')[0];

});

cron.schedule('0 */15 * * * *', () => { //every 15 minutes
    const dt= new Date(Date.now());
    const date = dt.toISOString().split('T')[0];

    Jobs.closeApptStatus9();
})

cron.schedule('0 */30 * * * *', () => { //every 30 minutes
    const dt= new Date(Date.now());
    const date = dt.toISOString().split('T')[0];

})

cron.schedule('0 0 7 * * *', () => { //every 07.00 AM
    const dt = new Date(Date.now());
    const date = dt.toISOString().split('T')[0];

    const scheduleDate = moment(date).add(1, 'days').format("YYYY-MM-DD");
    Jobs.sendAppointmentReminder(scheduleDate);
});


