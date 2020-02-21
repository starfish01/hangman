export default {

    getWord(state){
        return state.word;
    },
    getGuesses(state) {
        return state.currentGuesses;
    }

    // getStudents(state) {

    //     if (state.studentsData.length) {
    //         return state.studentsData;
    //     }
    //     const studentsList = state.loggedInUser[0].profile.students;
    //     const studentData = [];

    //     _.forEach(studentsList, (value, key) => {

    //         studentData.push({
    //             id: value.id,
    //             name: value.name,
    //             image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    //             campus: value.campus,
    //             yearLevel: value.grade.code,
    //             homeGroup: 'home Group missing',
    //             selected: key === 0 ? true : false
    //         })
    //     });

    //     return studentData;
    // }
}