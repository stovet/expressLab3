import express from 'express'
import Assignment from '../models/Assignment'

const assignmentsRoutes = express.Router();

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

assignmentsRoutes.get('/', function(req, res){
    res.render('home', {assignment});
});

export default assignmentsRoutes;