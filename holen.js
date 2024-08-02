async function fetchYouTubeContent() {
  const url = "https://www.youtube.com";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const text = await response.text();
    document.body.innerHTML = text;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchYouTubeContent();
