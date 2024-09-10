import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import checkConnectDatabase from './config/connectDatabase';
import scheduler from './background/his';
import responseData from './middlewares/responseData';
import initHealthCheckRoutes from './routes/healthcheck';
import schedulerEnCounter from './background/encounter';
const app = express()
let port = process.env.PORT || 3000;

// Enable All CORS Requests
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(responseData)

// Init Healthcheck route
initHealthCheckRoutes(app);

// Check connect with database
checkConnectDatabase();

scheduler();

// Call Scheduler for encounter
schedulerEnCounter.runSchedulerEnCounter();
schedulerEnCounter.runSchedulerEnCounterDuplicate()
schedulerEnCounter.runSchedulerItemEnCounter()
schedulerEnCounter.runSchedulerLabEnCounter();

app.listen(port, () => {
  console.log(`Backend Satu Sehat Scheduler is running on port ${port}`)
})