function getNutrition() {
  console.log("Button clicked"); 

  let food = document.getElementById("foodInput").value;
  console.log(food);
}

  $.ajax({
    url: "https://api.api-ninjas.com/v1/nutrition?query=" + food,
    method: "GET",
    headers: {
      "X-Api-Key": "YOUR_API_KEY"
    },
     success: function(data) {
      if (data.length > 0) {
        document.getElementById("result").innerHTML =
          "Calories: " + data[0].calories +
          " | Protein: " + data[0].protein_g + "g" +
          " | Fat: " + data[0].fat_total_g + "g";
      } else {
        document.getElementById("result").innerHTML = "No data found";
      }
    },

    error: function() {
      document.getElementById("result").innerHTML = "Error fetching data";
    }
  });
