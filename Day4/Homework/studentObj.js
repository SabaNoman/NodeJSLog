let students = [
    {
        stname: "Saba",
        subjects:[
            [{sn:"urdu"}, {marks:78}],
            [{sn:"math"}, {marks:90}]
        ]
    },
    {   stname: "Maria",
        subjects:[
            [{sn:"urdu"}, {marks:85}],
            [{sn:"math"}, {marks:80}]
        ]
    }
]

students.map(stud => {
    console.log(stud.stname);
    stud.subjects.forEach(element => {
        let [subject, marks] = element;
        console.log(`${subject.sn}: ${marks.marks}`)
    });
})