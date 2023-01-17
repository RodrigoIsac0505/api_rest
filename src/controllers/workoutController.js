const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  workoutService.getAllWorkouts()
    .then((workout) => 
      res.send({ status: "OK", data: workout }));
};

const getOneWorkout = (req, res) => {
  const { params: { workoutId }, } = req;
  if (!workoutId) {
    return;
  }
  workoutService.getOneWorkout(workoutId)
    .then((workout) => 
      res.send({ status: "OK", data: workout }));
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.email ||
    !body.password ||
    !body.name ||
    !body.last_name
  ) {
    return;
  }
  const newWorkout = {
    email: body.email,
    password: body.password,
    name: body.name,
    lastName: body.last_name
  };
  console.log(newWorkout);
  workoutService.createNewWorkout(newWorkout)
  .then((workout) => 
    res.status(201).send({ status: "OK", data: workout }));
};

const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({ status: "OK", data: updatedWorkout });
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};