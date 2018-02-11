"use strict";

import assert from 'power-assert'
import ScatterSwap from "../src/scatter_swap";

const randomDigits = (digit) => Math.floor(Math.random() * (10 ** digit));

describe("ScatterSwap", () => {
  describe("#hash()", () => {
    context("specify only number", () => {
      it("should be 10 digits", () => {
        for (let i = 0; i < 100; i++) {
          const target = randomDigits(10);
          assert(new ScatterSwap(target).hash().length == 10);
        }
      });
      it("should not be sequential", () => {
        const target = randomDigits(9);
        const first = new ScatterSwap(target).hash();
        const second = new ScatterSwap(target + 1).hash();
        assert(Number(first) != Number(second));
      });
      it("should be reversible", () => {
        for (let i = 0; i < 100; i++) {
          const target = randomDigits(10);
          const hashed = new ScatterSwap(target).hash();
          const reverseHashed = new ScatterSwap(Number(hashed)).reverseHash();
          assert(target == reverseHashed);
        }
      });
    });
    context("specify spin", () => {
      it("should be 10 digits", () => {
        for (let i = 0; i < 100; i++) {
          const target = randomDigits(10);
          const spin = randomDigits(5);
          assert(new ScatterSwap(target, spin).hash().length == 10);
        }
      });
      it("should not be sequential", () => {
        const target = randomDigits(9);
        const spin = randomDigits(5);
        const first = new ScatterSwap(target, spin).hash();
        const second = new ScatterSwap(target + 1, spin).hash();
        assert(Number(first) != Number(second));
      });
      it("should be reversible", () => {
        for (let i = 0; i < 100; i++) {
          const target = randomDigits(10);
          const spin = randomDigits(5);
          const hashed = new ScatterSwap(target, spin).hash();
          const reverseHashed = new ScatterSwap(Number(hashed), spin).reverseHash();
          assert(target == reverseHashed);
        }
      });
    });
    context("specify digits", () => {
      it("should be specified digits", () => {
        for (let i = 0; i < 100; i++) {
          const digit = randomDigits(1) + 1;
          const target = randomDigits(digit);
          const spin = randomDigits(5);
          assert(new ScatterSwap(target, spin, digit).hash().length == digit);
        }
      });
      it("should not be sequential", () => {
        const digit = randomDigits(1) + 1;
        const target = randomDigits(digit);
        const spin = randomDigits(5);
        const first = new ScatterSwap(target, spin, digit).hash();
        const second = new ScatterSwap(target + 1, spin, digit).hash();
        assert(Number(first) != Number(second));
      });
      it("should be reversible", () => {
        for (let i = 0; i < 100; i++) {
          const digit = randomDigits(1) + 1;
          const target = randomDigits(digit);
          const spin = randomDigits(5);
          const hashed = new ScatterSwap(target, spin, digit).hash();
          const reverseHashed = new ScatterSwap(Number(hashed), spin, digit).reverseHash();
          assert(target == reverseHashed);
        }
      });
    });
  });

  describe("#reverseHash()", () => {
    it("should be 10 digits", () => {
      for (let i = 0; i < 100; i++) {
        const target = randomDigits(10);
        assert(new ScatterSwap(target).reverseHash().length == 10);
      }
    });
    it("should not be sequential", () => {
      const target = randomDigits(9);
      const first = new ScatterSwap(target).reverseHash();
      const second = new ScatterSwap(target + 1).reverseHash();
      assert(Number(first) != Number(second));
    });
  });
});
