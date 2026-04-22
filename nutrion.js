async function getNutrition() {
  const food = document.getElementById("foodInput").value;

  const resultDiv = document.getElementById("result");

  if (!food) {
    resultDiv.textContent = "Please enter a food name";
    return;
  }

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/nutrition?query=${food}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "xayGaWWNgDF76bib3xFgvcFPlbPg77I2nLvE5smB"
        }
      }
    );

    if (!response.ok) {
      resultDiv.textContent = "API error. Try again later.";
      return;
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      resultDiv.textContent = "No nutrition data found";
      return;
    }

    const fat = data[0].fat_total_g;

    resultDiv.textContent = `Fat: ${fat} g`;

  } catch (error) {
    console.error(error);
    resultDiv.textContent = "Something went wrong";
  }
}
   