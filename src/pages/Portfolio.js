import React from "react";

const Portfolio = () => {
  return (
    <div class="container p-3 my-4 border">
      <div class="row">
        <div class="col-12">
          <h1 class="projects">
            Here are some of my projects that I have made. Please click on the
            photos to open the deployed application and click the title to see
            the repository of the projects.
          </h1>
          <div class="row">
            <div class="col-md-4">
              <figure class="">
                <a href="https://ivy-inventory-management.herokuapp.com/dashboard">
                  <img
                    src="./assets/images/ivy.png"
                    alt="ivy"
                    class="figure-img img-fluid rounded"
                  />
                </a>
                <figcaption>
                  <a href="https://github.com/gracee19/inventory-management-app">
                    IVY
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="col-md-4">
              <figure class="">
                <a href="https://evening-earth-10037.herokuapp.com/">
                  <img
                    src="./assets/images/note.png"
                    alt="notes"
                    class="figure-img img-fluid rounded"
                  />
                </a>
                <figcaption>
                  <a href="https://github.com/gracee19/note-taker">
                    Note Taker
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="row">
              <div class="col-md-4">
                <figure class="">
                  <a href="https://gracee19.github.io/web-api-code-quiz/">
                    <img
                      src="./assets/images/cq.png"
                      alt="quiz"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/web-api-code-quiz">
                      Code Quiz
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-4">
                <figure class="figure">
                  <a href="https://gracee19.github.io/weather-dashboard/">
                    <img
                      src="./assets/images/wd.png"
                      alt="weather-dash"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/weather-dashboard">
                      Weather Dashboard
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-4">
                <figure class="figure">
                  <a href="https://gracee19.github.io/joke-gif/">
                    <img
                      src="./assets/images/jokes.png"
                      alt="joke"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/joke-gif">Jokes</a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <h2 class="photos">
              This are some of the photos that I took in my trip to Kangaroo
              Island.
            </h2>
            <div class="row">
              <div class="col-md-4">
                <figure class="figure">
                  <img
                    src="./assets/images/cup.jpg"
                    alt="cup"
                    class="figure-img img-fluid rounded"
                  />
                </figure>
              </div>
              <div class="col-md-4">
                <figure class="figure">
                  <img
                    src="./assets/images/random.jpg"
                    alt="person"
                    class="figure-img img-fluid rounded"
                  />
                </figure>
              </div>
              <div class="col-md-4">
                <figure class="figure">
                  <img
                    src="./assets/images/rocks.jpg"
                    alt="rocks"
                    class="figure-img img-fluid rounded"
                  />
                </figure>
              </div>
              <div class="col-md-4">
                <figure class="figure">
                  <img
                    src="./assets/images/water.jpg"
                    alt="waves"
                    class="figure-img img-fluid rounded"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
