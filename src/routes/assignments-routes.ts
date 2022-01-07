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

let average: number = 0;

assignmentsRoutes.get('/', function(req, res){
    let totalScore: number = 0;
    let average: number= 0;
    assignment.forEach(item => {
        if(item.completed === true){
            totalScore += (item.score / item.total) * 100;
        }
    });
    average = totalScore / assignment.length;
    average.toFixed(2);
    res.render('home', {assignment, average});
});
assignmentsRoutes.get('/add', function(req, res){
    res.render('add');
});
assignmentsRoutes.post('/add', function(req, res){
    // let name: string = req.body.name as string;
    // let score: number = parseInt(req.body.score as string);
    // let total: number = parseInt(req.body.total as string);
     let completed: boolean = !!(req.body.completed as string);
    let newAssignment: Assignment = {
        name: req.body.name ,
        score: req.body.score,
        total: req.body.total,
        completed
    }
    if(req.body.completed){
        completed = true;
    } else completed = false;
    assignment.push(newAssignment);
    res.render('added', {newAssignment})
});

assignmentsRoutes.get('/delete', function(req, res){
    res.render('delete');
});
assignmentsRoutes.get('/delete', function(req, res){

})

// endpoints
assignmentsRoutes.get('/api/assignments', function(req, res){
    res.json(assignment);
    res.status(200);
});
// NEEDS WORK 
assignmentsRoutes.get('/api/summary', function(req,res){
    res.json({average, assignment})
});
export default assignmentsRoutes;