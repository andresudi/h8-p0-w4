function changeMe(arr) {
    var no = 0;
    var fullName = ''
    // you can only write your code here!
    if (arr.length === 0) {
        console.log('""')
    } else {
        for (var i = 0; i < arr.length; i++) {
            no++
            var myObj = {}
            myObj.firstname = arr[i][0]
            myObj.lastname = arr[i][1]
            myObj.gender = arr[i][2]

            //myObj.age = 2018 - arr[i][3]
            if (arr[i][3] === undefined) {
                myObj.age = "Invalid Birth Year"
            } else {
                myObj.age = 2018 - arr[i][3]
            }
            fullName = arr[i][0] + " " + arr[i][1]
            console.log(no + '. ' + fullName)
            console.log(myObj)
        }
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""