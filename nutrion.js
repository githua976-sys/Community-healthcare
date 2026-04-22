function getNutrition() {
  let food = document.getElementById("foodInput").value;

  if (food === "") {
    document.getElementById("result").innerHTML = "Enter a food item";
    return;
  }

  $.ajax({
    url: "https://api.api-ninjas.com/v1/nutrition",
    type: "GET",
    data: { query: food },
    headers: {
      "X-Api-Key": "xayGaWWNgDF76bib3xFgvcFPlbPg77I2nLvE5smB"
    },

    success: function (data) {
      console.log(data); // IMPORTANT for debugging

      if (data && data.length > 0) {
        document.getElementById("result").innerHTML =
          "Calories: " + data[0].calories;
      } else {
        document.getElementById("result").innerHTML =
          "No results found";
      }
    },

    error: function () {
      document.getElementById("result").innerHTML =
        "API error or network issue";
    }
  });
}