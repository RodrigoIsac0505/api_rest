// In src/services/workoutServices.js
//libreria para crear id aleatorios
const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       Workout.getAllWorkouts().then((workout) => resolve(workout));
    }, 1000)
  }) 
};

const getOneWorkout = (workoutId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Workout.getOneWorkout(workoutId).then((workout) => resolve(workout));
    }, 1000)
  })
};

const createNewWorkout = (newWorkout) => {
  //agregando la id aleatoria y las fechas
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  console.log(workoutToInsert);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Workout.createNewWorkout(workoutToInsert).then((workout) => resolve(workout));
    }, 1000)
  })
};

const updateOneWorkout = (workoutId, changes) => {
  const workoutToUpdated = {
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Workout.updateOneWorkout(workoutId, workoutToUpdated).then((workout) => resolve(workout));
    }, 1000)
  })
};

const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};