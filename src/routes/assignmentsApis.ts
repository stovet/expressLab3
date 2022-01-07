import express from 'express';
import Assignment from '../models/Assignment'
const routes = express.Router();

let assignment: Assignment[] = [
    {
    name: "Walrus Worksheet", score: 9, total: 10, completed: true
    },
    {
        name: "Jellyfish Project", score: 15, total: 15, completed: true
    },
    {
        name: "Dolphin Quiz", score: 8, total: 10, completed: true
    },
    {
        name: "Oceans Unit Test", score: 0, total: 25, completed: false
    }
];

// endpoints
routes.get('/api/assignments', function(req, res){
    res.json(assignment);
    res.status(200);
});
// NEEDS WORK 
// routes.get('/api/summary', function(req,res){
//     res.json({average, assignment})
// });

export default routes;