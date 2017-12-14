const express = require("express");
const cors = require("cors");
const data = require("./data/students")
const app = express();
app.use(cors());

function getById(data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  };
  return null;
};

app.get("/", (request, response) => {
  response.json({ data });
});

app.get("/:id", (request, response) => {
  const record = getById(data, request.params.id);
  if (!record) {
    response.status(404).json({
      error: {
        message: "No record found!"
      }
    });
  } else {
    response.json({ data: record });
  }
});

app.listen(process.env.PORT || 3000);
