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

    it("should increase the benefit twice as fast once the expiration date has passed", () => {
      // Before
      const drugTestBefore = new Drug("Herbal Tea", 0, 4);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Herbal Tea", -1, 6);
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

  describe("Drug > Magic Pill", () => {
    it("should never decrease the benefit nor expiresIn", () => {
      // Before
      const drugTestBefore = new Drug("Magic Pill", 2, 3);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Magic Pill", 2, 3);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs).toEqual(drugsAfter);
    });
  });

  describe("Drug > Fervex", () => {
    it("should decrease the expiresIn", () => {
      // Before
      const drugTestBefore = new Drug("Fervex", 2, 3);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Fervex", 1, 4);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs[0].expiresIn).toEqual(drugsAfter[0].expiresIn);
    });

    it("should increase the benefit by 2 when expiresIn <= 10 days", () => {
      // Before
      const drugTestBefore = new Drug("Fervex", 9, 3);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Fervex", 8, 5);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs[0].benefit).toEqual(drugsAfter[0].benefit);
    });

    it("should increase the benefit by 3 when expiresIn <= 5 days", () => {
      // Before
      const drugTestBefore = new Drug("Fervex", 2, 3);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Fervex", 1, 6);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs[0].benefit).toEqual(drugsAfter[0].benefit);
    });

    it("should drop benefit to 0 after the expiration date", () => {
      // Before
      const drugTestBefore = new Drug("Fervex", 0, 4);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Fervex", -1, 0);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs).toEqual(drugsAfter);
    });
  });

  describe("Drug > Dafalgan", () => {
    it("should decrease the expiresIn", () => {
      // Before
      const drugTestBefore = new Drug("Dafalgan", 2, 3);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Dafalgan", 1, 2);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs[0].expiresIn).toEqual(drugsAfter[0].expiresIn);
    });

    it("should decrease the benefit twice as fast as normal drugs", () => {
      // Before
      const drugTestBefore = new Drug("Dafalgan", 2, 4);
      const drugsBefore = [ drugTestBefore ];
      const pharmacy = new Pharmacy(drugsBefore);

      // Call site
      const updatedDrugs = pharmacy.updateBenefitValue();

      // After
      const drugTestAfter = new Drug("Dafalgan", 1, 2);
      const drugsAfter = [ drugTestAfter ];

      // Assertion
      expect(updatedDrugs[0].benefit).toEqual(drugsAfter[0].benefit);
    });
  });
});
