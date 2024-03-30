document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/alumni.json")
    .then((response) => response.json())
    .then((data) => {
      alumni = data.alumni;
      const outputDiv = document.getElementById("alumni_box_team");
      result = "";
      alumni.map(
        (val) =>
          (result += `
        <div class="card1">
              <div class="text_team1">
                <p class="name_text_team">${val.name}</p>
                <p class="status_text_team">${val.field}</p>
                <div class="icons_team1">
                  ${
                    val.linkedin
                      ? `<a href="${val.linkedin}" class="tooltip" target="_blank"><img  src="./image/linkedin.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's LinkedIn</span>
                      </a>`
                      : ""
                  }
                  ${
                    val.github
                      ? `<a href="${val.github}" class="tooltip" target="_blank"><img   src="./image/git.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's GitHub</span>
                      </a>`
                      : ""
                  }
                  ${
                    val.google_scholar
                      ? `<a href="${val.google_scholar}" class="tooltip" target="_blank"><img src="./image/google.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's Google Scholar</span>
                      </a>`
                      : ""
                  }
                  ${
                    val.homepage
                      ? `<a href="${val.homepage}" class="tooltip" target="_blank"><img src="./image/website.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's Website</span>
                      </a>`
                      : ""
                  }
                </div> 
              </div>
            </div> 
      `)
      );
      outputDiv.innerHTML = result;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
