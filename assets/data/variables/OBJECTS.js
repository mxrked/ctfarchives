// This file is used to hold some objects

import Sample from "../classes/Sample";

const USED_CARS = new Sample(
  1,
  "sampleSrc1",
  "Used Car Dealerships",
  "Description for Used Car Dealerships",
  10000,
  "sampleImg1"
);
const PAINTER = new Sample(
  2,
  "sampleSrc2",
  "Painters",
  "Description for Painters",
  500,
  "sampleImg2"
);
const LAWN_CARE = new Sample(
  3,
  "sampleSrc3",
  "Lawn Care",
  "Description for Lawn Care",
  500,
  "sampleImg3"
);
const ARTS_AND_CRAFTS = new Sample(
  4,
  "sampleSrc4",
  "Arts and Crafts",
  "Description for Arts and Crafts",
  50,
  "sampleImg4"
);
const PLUMBERS = new Sample(
  5,
  "sampleSrc5",
  "Plumbers",
  "Description for Plumbers",
  50,
  "sampleImg5"
);
const PRESSURE_WASHERS = new Sample(
  6,
  "sampleSrc6",
  "Plumbers",
  "Description for Plumbers",
  50,
  "sampleImg6"
);

export {
  USED_CARS,
  PAINTER,
  PLUMBERS,
  PRESSURE_WASHERS,
  ARTS_AND_CRAFTS,
  LAWN_CARE,
};
