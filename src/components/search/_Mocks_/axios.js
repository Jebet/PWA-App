"use strict";
module.exports = {
  get: () => {
    return Promise.resolve({
      results: [
        {
          id: 0,
          name: "supername",
        },
        {
          id: 1,
          name: "life",
        },
      ],
    });
  },
};
