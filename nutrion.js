function getNutrition() {
  let food = document.getElementById("foodInput").value;

  if (food === "") {
    document.getElementById("result").innerHTML = "Please enter a food item";
    return;
  }

  $.ajax({
    url: "https://api.api-ninjas.com/v1/nutrition",
    type: "GET",
    data: {
      query: food
    },
    headers: {
      "X-Api-Key": "xayGaWWNgDF76bib3xFgvcFPlbPg77I2nLvE5smB"
    },
    contentType: "application/json",

    success: function (data) {
      if (data.length > 0) {
        document.getElementById("result").innerHTML =
          "Calories: " + data[0].calories;
      } else {
        document.getElementById("result").innerHTML =
          "No nutrition data found";
      }
    },

    error: function () {
      document.getElementById("result").innerHTML =
        "Error fetching data";
    }
  });
}
