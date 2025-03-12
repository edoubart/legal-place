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

  it("should make sure that the benefit of an item is never negative", () => {
    // Before
    const drugTestBefore = new Drug("test", 0, 4);
    const drugsBefore = [ drugTestBefore ];
    const pharmacy = new Pharmacy(drugsBefore);

    // Call site
    const updatedDrugs = pharmacy.updateBenefitValue();

    // Assertion
    expect(updatedDrugs[0].benefit).toBeGreaterThanOrEqual(0);
  });

  it("should decrease the benefit twice as fast once the expiration date has passed", () => {
    // Before
    const drugTestBefore = new Drug("test", 0, 4);
    const drugsBefore = [ drugTestBefore ];
    const pharmacy = new Pharmacy(drugsBefore);

    // Call site
    const updatedDrugs = pharmacy.updateBenefitValue();

    // After
    const drugTestAfter = new Drug("test", -1, 2);
    const drugsAfter = [ drugTestAfter ];

    // Assertion
    expect(updatedDrugs).toEqual(drugsAfter);
  });

  describe("Drug > Herbal Tea", () => {
    it("should decrease the expiresIn", () => {
      // Before
      const drugTestBefore = new Drug("Herbal Tea", 2, 3);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Herbal Tea", 1, 4);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs[0].expiresIn).toEqual(drugsAfter[0].expiresIn);
    });

    it("should increase the benefit", () => {
      // Before
      const drugTestBefore = new Drug("Herbal Tea", 2, 3);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Herbal Tea", 1, 4);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs[0].benefit).toEqual(drugsAfter[0].benefit);
    });

    it("should make sure that the benefit is never more than 50", () => {
      // Before
      const drugTestBefore = new Drug("Herbal Tea", 0, 50);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // Assertion
      expect(updatedDrugs[0].benefit).toBeLessThanOrEqual(50);
    });
  });
});
