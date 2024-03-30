document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/publications.json")
    .then((response) => response.json())
    .then((data) => {
      publications = data.publications;
      const outputDiv = document.getElementById("publications_box_team");
      publicationsResult = "";
      publications.map((val, index) => {
        const img =
          val.image == ""
            ? `<span></span>`
            : `<img src=${val.image} class="image_research" />
            `;

        publicationsResult += `
        <div class="card_research">
        <div class="image_research_box">
        ${img}
        </div>
        <div class="left_research_box">
          <span>
          <a href="${val.url}" target="_blank">
            <div class="title_research_box">
              <h4 class="title_research">
              ${val.title}
              </h4>
            </div>
          </a>
            <div class="contain_text_research_box">
              <p class="contain_text_research">
              ${val.abstract}
              </p>
            </div>
            <p class="jurnal">
            ${val.journal}, ${val.year}
            </p>
            <p class="author">
            ${val.author}
            </p>
          </span>
          <div class="icons_research_box">
            <div class="icon_text_research">
              <img src="./image/quote.png" class="icon" />
              <p class="paragraph_icon_research">BibTeX</p>
            </div>
            ${
              val.pdf
                ? `<a href="${val.pdf}" target="_blank">
              <div class="icon_text_research">
                <img src="./image/box.png" class="icon" />
                <p class="paragraph_icon_research">PDF</p>
              </div>
            </a>`
                : ""
            }
            ${
              val.code
                ? `<a href="${val.code}" target="_blank">
                <div class="icon_text_research">
                  <img src="./image/code.png" class="icon" />
                  <p class="paragraph_icon_research">Code</p>
                </div>
              </a>`
                : ""
            }
            ${
              val.website
                ? `<a href="${val.website}" target="_blank">
                <div class="icon_text_research">
                  <img src="./image/world.png" class="icon" />
                  <p class="paragraph_icon_research">Website</p>
                </div>
            </a>`
                : ""
            }
            ${
              val.youtube
                ? `<a href="${val.youtube}" target="_blank">
                  <div class="icon_text_research">
                    <img src="./image/youtube.png" class="icon" />
                    <p class="paragraph_icon_research">Youtube</p>
                  </div>
              </a>`
                : ""
            }
          </div>
        </div>
      </div> 
      `;
      });
      outputDiv.innerHTML = publicationsResult;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
