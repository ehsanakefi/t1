document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/PhDStudents.json")
    .then((response) => response.json())
    .then((data) => {
      PHDStudents = data.PhDStudents;
      const outputDiv = document.getElementById("PHDStudents_box_team");
      PHDStudentsResult = "";
      PHDStudents.map((val, index) => {
        const img =
          val.image == ""
            ? `<div class=${
                index % 2 == 0 ? "empty_image_box1" : "empty_image_box2"
              }></div>`
            : ` <img class="lazyload profile_img_team" data-src=${val.image}   />`;

        PHDStudentsResult += `<div class="card">
              <div class="image_box">
               ${img}
              </div>
              <div class="text_team">
                <p class="name_text_team">${val.name}</p>
                <p class="status_text_team">${val.field}</p>
                <div class="icons_team">
                  ${
                    val.linkedin
                      ? `<a href="${val.linkedin}" class="tooltip" target="_blank"><img src="./image/linkedin.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's LinkedIn</span></a>`
                      : ""
                  }
                  ${
                    val.github
                      ? `<a href="${val.github}" class="tooltip" target="_blank"><img src="./image/git.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's GitHub</span></a>`
                      : ""
                  }
                  ${
                    val.google_scholar
                      ? `<a href="${val.google_scholar}" class="tooltip" target="_blank"><img src="./image/google.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's Google Scholar</span></a>`
                      : ""
                  }
                  ${
                    val.homepage
                      ? `<a href="${val.homepage}" class="tooltip" target="_blank"><img src="./image/website.png" class="icons_team_img" />
                      <span class="tooltiptext">${val.name} 's Website</span></a>`
                      : ""
                  }
                </div> 
              </div>
            </div>  
      `;
      });
      outputDiv.innerHTML = PHDStudentsResult;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
