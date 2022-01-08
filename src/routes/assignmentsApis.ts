import express from 'express';
import Assignment from '../models/Assignment'
import {averageScoreApi, data} from '../models/assignments-database'
const routes = express.Router();

// endpoints
routes.get('/api/assignments', function(req, res){
    res.json(data);
    res.status(200);
});
//NEEDS WORK 
routes.get('/api/summary', function(req,res){
    let average: number = averageScoreApi(data)
    res.json({average, data})
    res.status(200);
});

export default routes;