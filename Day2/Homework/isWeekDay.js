//Accept day as string and return true if it is a weekday and false otherwise
let env = process.argv[2]
function isWeekday(givenDay){
    givenDay = givenDay.toLowerCase()
    if (! (["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].includes(givenDay))){
        (console.log("Please enter the day again:"))
    }
    else{
        if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(givenDay)) {
            console.log("True,", givenDay, "is a Weekday");
        }
        else
            {
                console.log("False")
            }
    }
    
}
isWeekday(env)
