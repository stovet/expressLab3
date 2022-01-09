const {averageScore} = require("../src/models/assignments-database");

describe("averageScore", function(){
    test("an array", function(){
        let assignment = [
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
    expect(averageScore(assignment)).toEqual(91.4);
    });
    test("Different numbers", function(){
        let assignment = [
            {
            name: "Walrus Worksheet", score: 10, total: 10, completed: true
            },
            {
                name: "Jellyfish Project", score: 15, total: 15, completed: true
            },
            {
                name: "Dolphin Quiz", score: 10, total: 10, completed: true
            },
            {
                name: "Oceans Unit Test", score: 0, total: 25, completed: false
            }
        ];
        expect(averageScore(assignment)).toEqual(100);
    });
    test("empty array", function(){
        let assignment = [];
        expect(averageScore(assignment)).toEqual(0);
    })
})