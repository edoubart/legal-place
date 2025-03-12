export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

// Functional Approach with Builder Pattern implementation
function decreaseBenefit(drug) {
  return {
    ...drug,
    benefit: drug.benefit - 1,
  };
}

function increaseBenefit(drug) {
  return {
    ...drug,
    benefit: drug.benefit + 1,
  };
}

function decreaseExpireIn(drug) {
  return {
    ...drug,
    expiresIn: drug.expiresIn - 1,
  };
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      // TODO: Replace those nested if..else if..else.. conditional statements
      // AKA "Pyramid of Doom" by a switch case statements with a match
      // arm/pattern for each individual drug.

      if (this.drugs[i].name === "Dafalgan") {
        if ((this.drugs[i].benefit - 2) >= 0) {
          this.drugs[i].benefit = this.drugs[i].benefit - 2;
        }
        else {
          this.drugs[i].benefit = 0;
        }

        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

        continue;
      }

      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            //this.drugs[i] = decreaseBenefit(this.drugs[i]);
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      }
      else {
        if (this.drugs[i].benefit < 50) {
          //this.drugs[i] = increaseBenefit(this.drugs[i]);
          this.drugs[i].benefit = this.drugs[i].benefit + 1;

          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                //this.drugs[i] = increaseBenefit(this.drugs[i]);
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                //this.drugs[i] = increaseBenefit(this.drugs[i]);
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        //if (this.drugs[i].expiresIn > 0) {
          //this.drugs[i] = decreaseExpireIn(this.drugs[i]);
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
        //}
      }
      if (this.drugs[i].expiresIn <= 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                //this.drugs[i] = decreaseBenefit(this.drugs[i]);
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          }
          else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        }
        else {
          if (this.drugs[i].benefit < 50) {
            //this.drugs[i] = increaseBenefit(this.drugs[i]);
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
