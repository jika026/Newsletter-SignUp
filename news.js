const validateButton = document.querySelector("#validate");
const emailInput = document.querySelector("#mail");
const form = document.querySelector(".container main form");
const wholePage = document.querySelector("body");
//  prevent default action of input
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

validateButton.addEventListener("click", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorSpace = document.querySelector("#error");
  const errorMessage = "Valid email required";
  errorSpace.style.color = "red";
  if (emailPattern.test(emailInput.value)) {
    wholePage.innerHTML = `
      <div class="successful">
      <div class="top">
        <div>
          <img src="assets/images/icon-success.svg" alt="" />
        </div>
        <div>
          <h1>Thanks for subscribing!</h1>
        </div>
        <div>
          <p>
            A confirmation email has been sent to <b>${emailInput.value}</b>. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
        </div>
        <div>
          <div class="dismiss">
            <a href=""> Dismiss message</a>
          </div>
        </div>
      </div>
    `;
  } else {
    errorSpace.innerHTML = `${errorMessage}`;
    emailInput.style.color = "red";

    form.addEventListener("input", () => {
      if (!emailPattern.test(emailInput.value)) {
        emailInput.style.color = "";
        errorSpace.innerHTML = ``;
      }
    });
  }
});
