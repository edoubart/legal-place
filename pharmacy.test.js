// Custom Modules
import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    // Before
    const drugTestBefore = new Drug("test", 2, 3);
    const drugsBefore = [ drugTestBefore ];
    const pharmacy = new Pharmacy(drugsBefore);

    // Call site
    const updatedDrugs = pharmacy.updateBenefitValue();

    // After
    const drugTestAfter = new Drug("test", 1, 2);
    const drugsAfter = [ drugTestAfter ];

    // Assertion
    expect(updatedDrugs).toEqual(drugsAfter);
  });
});
