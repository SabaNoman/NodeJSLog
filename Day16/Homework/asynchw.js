// student
//     course
//     attendance
// print student attendance with std name of specific course

async function studentFunc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Saba' },
                { id: 2, name: 'Bushra' },
                { id: 3, name: 'Maria' }
            ]);
        }, 1000);
    });
}

async function attendanceFunc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { studentId: 1, courseName: 'Math', attended: true },                
                { studentId: 1, courseName: 'English', attended: true },
                { studentId: 2, courseName: 'Math', attended: true },
                { studentId: 2, courseName: 'English', attended: false },
                { studentId: 3, courseName: 'Math', attended: true },
                { studentId: 3, courseName: 'English', attended: true }
            ]);
        }, 1000);
    });
}


async function checkAttendance(specificCourse) {
    const students = await studentFunc();
    
    const attendance = await attendanceFunc();

    const studentAttendance = attendance.filter(att => att.courseName === specificCourse)
                                        .map(att => {
                                            const student = students.find(s => s.id === att.studentId);
                                            return {
                                                studentName: student ? student.name : 'Unknown',
                                                attended: att.attended
                                            };
                                        });

    console.log(`Attendance for course ${specificCourse}:`, studentAttendance);


};
checkAttendance('English')