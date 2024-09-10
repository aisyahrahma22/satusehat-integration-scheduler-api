import cron from 'node-cron';
const moment = require("moment");
moment.locale('id')
const Jobs = require('./jobs');

export default function his() {
    cron.schedule("0 0 0 1 * *", async function () {   // every month at 00.00
        const dt = new Date(Date.now());
        const convertToUTC = dt.toISOString().split('T')[0];
        const dateString = moment(convertToUTC).add(1, 'days');

        const currentMonth = moment(dateString).format('M')
        const currentYear = moment(dateString).format('YYYY')

        let prevMonth
        let prevYear
        if(currentMonth === '1'){
            prevMonth = '12'
            prevYear = moment(dateString).subtract(1, 'years').format('YYYY')
        } else {
            prevMonth = moment(dateString).subtract(1, 'months').format('M')
            prevYear = moment(dateString).format('YYYY')
        }
    });
}
