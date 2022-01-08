import Assignment from "./Assignment";


let nextId: number = 1;
export let data: Assignment[] = [];
// export let assignment: Assignment[] = [
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
createAssignment({name: "Walrus Worksheet", score: 9, total: 10, completed: true});
createAssignment({name: "Jellyfish Project", score: 15, total: 15, completed: true});
createAssignment({name: "Dolphin Quiz", score: 8, total: 10, completed: true});
createAssignment({name: "Oceans Unit Test", score: 0, total: 25, completed: false});


export function createAssignment(assignment: Assignment):void{
    assignment.id = nextId;
    nextId++;
    data.push(assignment);
}
export function readAllAssignments():Assignment[]{
    return data;
}

export function deleteById(id: number):string{
    let name: string = "";
    data.forEach(item => {
        if(item.id === id){
            data.splice(id-1, 1);
            name = item.name;
        }
    })
    return name;
}

export function averageScore(assignment: Assignment[]): number{
    let score: number = 0;
    let total: number = 0;
    let average: number= 0;
    let count: number = 0;
    assignment.forEach(item => {
        if(item.completed === true){
            score+= item.score;
            total+= item.total;
        }
    });
    average = (score / total) * 100;
    if(average){
        return parseFloat(average.toFixed(1));
    } return 0;
}
export function averageScoreApi(assignment: Assignment[]): number{
    let score: number = 0;
    let total: number = 0;
    let average: number= 0;
    let count: number = 0;
    assignment.forEach(item => {
        if(item.completed === true){
            score+= item.score;
            total+= item.total;
        }
    });
    average = (score / total) * 100;
    if(average){
        return average;
    } return 0;
}