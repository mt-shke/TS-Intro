// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
// console.log(statuses.inProgress);
// enum Status {
// 	NotStarted,
// 	InProgress,
// 	Done,
// }
// console.log(Status.InProgress); // output 1 : objKey number
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
