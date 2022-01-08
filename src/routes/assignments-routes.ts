import express from 'express'
import Assignment from '../models/Assignment'
import { data, averageScore, createAssignment, readAllAssignments, deleteById } from '../models/assignments-database';

const assignmentsRoutes = express.Router();

// let assignment: Assignment[] = [
//     {
//     name: "Walrus Worksheet", score: 9, total: 10, completed: true
//     },
//     {
//         name: "Jellyfish Project", score: 15, total: 15, completed: true
//     },
//     {
//         name: "Dolphin Quiz", score: 8, total: 10, completed: true
//     },
//     {
//         name: "Oceans Unit Test", score: 0, total: 25, completed: false
//     }
// ];

let average: number = 0;

assignmentsRoutes.get('/', function(req, res){
    let assignments = readAllAssignments();
    let average: number = averageScore(assignments)
    //parseFloat(average.toFixed(1)); 
    //Math.round(average);
    res.render('home', {assignments, average});
});
assignmentsRoutes.get('/add', function(req, res){
    res.render('add');
});
assignmentsRoutes.post('/add', function(req, res){
    // let name: string = req.body.name as string;
    // let score: number = parseInt(req.body.score as string);
    // let total: number = parseInt(req.body.total as string);
     let completed: boolean = !!(req.body.completed as string);
     let assignments = readAllAssignments();
    let newAssignment: Assignment = {
        name: req.body.name ,
        score: req.body.score,
        total: req.body.total,
        completed
    }
    if(req.body.completed){
        completed = true;
    } else completed = false;
    data.push(newAssignment);
    res.render('added', {newAssignment})
});

assignmentsRoutes.get('/delete', function(req, res){
    res.render('delete');
});
assignmentsRoutes.get('/:id/delete', function(req, res){
    let id:number = parseInt(req.params.id as string);
    let name: string = deleteById(id);
    res.render('delete', { name });
})


export default assignmentsRoutes;