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
    last_name: body.last_name
  };
  console.log(body);
  workoutService.createNewWorkout(newWorkout)
  .then((workout) => 
    res.status(201).send({ status: "OK", data: workout }));
};

const updateOneWorkout = (req, res) => {
  /*const { params: { workoutId }, } = req;
  if (!workoutId) {
    return;
  }
  const { body } = req;
  if (
    !body.email ||
    !body.password ||
    !body.name ||
    !body.last_name
  ) {
    return;
  }
  const datosUpdated = {
    email: body.email,
    password: body.password,
    name: body.name,
    last_name: body.last_name
  };*/
    const {
      body,
      params: { workoutId },
    } = req;
    if (!workoutId) {
      return;
    }
    workoutService.updateOneWorkout(workoutId, body)
      .then((updatedWorkout) => 
        res.send({ status: "OK", data: updatedWorkout }));
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