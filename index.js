// Write your solution in this file!
let employee = {};

function updateEmployeeWithKeyAndValue (employee, key, value){
    return {...employee, [key]: value };
    // Return a new obect wih the original data and the new key-value pair
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly modify the original employee object
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    // Create a new object by spreading the employee object and excluding the specified key
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Directly delete the key from the original employee object
    delete employee[key];
    return employee;
  }
  