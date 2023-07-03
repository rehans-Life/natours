const fs = require("node:fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, {
    encoding: "utf-8",
  })
);

const checkID = async (req, res, next, val) => {
  console.log(val);
  const id = parseInt(val);

  if (id > tours.length) {
    return res.status(400).json({
      status: "error",
      message: "ID doesn't Exist",
    });
  }
  next();
};

const getToures = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: { tours },
  });
};

const addTour = async (req, res) => {
  const tour = req.body;

  const id = tours.length + 1;
  const newTour = {
    id,
    ...tour,
  };

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        res.status(400).json({
          status: "failure",
          message: "An Error Occured",
        });
        return;
      }
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const getTour = async (req, res) => {
  const id = req.params.id;

  const tour = tours.find((tour) => tour.id == id);

  if (tour) {
    res.status(200).json({
      sucess: "success",
      data: {
        tour,
      },
    });
  } else {
    res.status(400).json({
      status: "failure",
      message: "Tour not Found",
    });
  }
};

const updateTour = async (req, res) => {
  const id = req.params.id;
  const tourIndex = tours.findIndex((tour) => tour.id == id);

  if (tourIndex !== -1) {
    tours[tourIndex] = {
      ...tours[tourIndex],
      ...req.body,
    };

    fs.writeFile(
      `${__dirname}/../dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        if (err) {
          res.status(400).json({
            status: "failure",
            message: "An Error Occured",
          });
        } else {
          res.status(200).json({
            status: "success",
            data: {
              tour: tours[tourIndex],
            },
          });
        }
      }
    );
  } else {
    res.status(400).json({
      status: "failure",
      message: "Tour not Found",
    });
  }
};

const deletedTour = async (req, res) => {
  const id = parseInt(req.params.id);
  const tourIndex = tours.findIndex((tour) => tour.id === id);

  if (tourIndex !== -1) {
    const deletedTour = tours.splice(tourIndex, 1);

    fs.writeFile(
      `${__dirname}/../dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        if (err) {
          return res.status(400).json({
            status: "failure",
            message: "An Error Occured",
          });
        } else {
          return res.status(200).json({
            status: "success",
            data: deletedTour,
          });
        }
      }
    );
  } else {
    return res.status(400).json({
      status: "failure",
      message: "Tour not Found",
    });
  }
};

module.exports = {
  getTour,
  getToures,
  addTour,
  updateTour,
  deletedTour,
  checkID,
};
