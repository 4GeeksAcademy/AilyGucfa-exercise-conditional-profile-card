import "../style/index.css";
/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let socialMediaIcons = "";

  if (variables.twitter !== null && variables.twitter !== "") {
    const twitterURL = `https://twitter.com/${variables.twitter}`;
    socialMediaIcons += `<li><a href="${twitterURL}"><i class="fab fa-twitter"></i></a></li>`;
  }

  if (variables.github !== null && variables.github !== "") {
    const githubURL = `https://github.com/${variables.github}`;
    socialMediaIcons += `<li><a href="${githubURL}"><i class="fab fa-github"></i></a></li>`;
  }

  if (variables.linkedin !== null && variables.linkedin !== "") {
    const linkedinURL = `https://linkedin.com/${variables.linkedin}`;
    socialMediaIcons += `<li><a href="${linkedinURL}"><i class="fab fa-linkedin"></i></a></li>`;
  }

  if (variables.instagram !== null && variables.instagram !== "") {
    const instagramURL = `https://instagram.com/${variables.instagram}`;
    socialMediaIcons += `<li><a href="${instagramURL}"><i class="fab fa-instagram"></i></a></li>`;
  }

  const countryDropdown = document.querySelector("#country");
  const cityDropdown = document.querySelector("#city");

  // Reset country dropdown to show all options.In the condition && option.value !-- "", This ensures that the "null" option remains visible in the country dropdown, allowing users to select it to see all the country options
  countryDropdown.querySelectorAll("option").forEach(option => {
    option.style.display = "block";
  });

  if (variables.city === "Miami") {
    // Show only USA in country dropdown if Miami is selected
    countryDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "USA" && option.value !== "") {
        option.style.display = "none";
      }
    });
  } else if (variables.city === "Toronto") {
    // Show only Canada in country dropdown if Toronto is selected
    countryDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "Canada" && option.value !== "") {
        option.style.display = "none";
      }
    });
  } else if (variables.city === "Munich") {
    // Show only Germany in country dropdown if Munich is selected
    countryDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "Germany" && option.value !== "") {
        option.style.display = "none";
      }
    });
  } else if (variables.city === "Caracas") {
    // Show only Venezuela in country dropdown if Caracas is selected
    countryDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "Venezuela" && option.value !== "") {
        option.style.display = "none";
      }
    });
  }

  // Reset city dropdown to show all options . In the condition && option.value !-- "", This ensures that the "null" option remains visible in the city dropdown, allowing users to select it to see all the city options
  cityDropdown.querySelectorAll("option").forEach(option => {
    option.style.display = "block";
  });

  if (variables.country === "USA") {
    // Show only Miami in city dropdown if USA is selected
    cityDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "Miami" && option.value !== "") {
        option.style.display = "none";
      }
    });
  } else if (variables.country === "Canada") {
    // Show only Toronto in city dropdown if Canada is selected
    cityDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "Toronto" && option.value !== "") {
        option.style.display = "none";
      }
    });
  } else if (variables.country === "Germany") {
    // Show only Munich in city dropdown if Germany is selected
    cityDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "Munich" && option.value !== "") {
        option.style.display = "none";
      }
    });
  } else if (variables.country === "Venezuela") {
    // Show only Caracas in city dropdown if Venezuela is selected
    cityDropdown.querySelectorAll("option").forEach(option => {
      if (option.value !== "Caracas" && option.value !== "") {
        option.style.display = "none";
      }
    });
  }

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
    ${cover}
    <img src="${variables.avatarURL}" class="photo" />
    <h1>${
      variables.name == null || variables.name == "" ? "first" : variables.name
    } ${
    variables.lastname == null || variables.lastname == ""
      ? "last"
      : variables.lastname
  }</h1>
    <h2>${variables.role == null ? "Role" : variables.role}</h2>
    <h3>${variables.city == null ? "City" : variables.city} ${
    variables.country == null ? "Country" : variables.country
  }</h3>
    <ul class="${variables.socialMediaPosition}">
      ${socialMediaIcons}
    </ul>
  </div>`;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
