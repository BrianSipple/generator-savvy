const concerns = require('../../utils/concerns');
const { CONCERN_UTILITY, pluralizeConcern } = concerns;

describe('Concern Utilities', () => {

  describe('#pluralizeConcerns', () => {

    it('pluralizes recognized concern names', () => {
      expect(pluralizeConcern(CONCERN_UTILITY)).toBe('Utilities');
    });

    it('returns unrecognized input as is', () => {
      const gibberish = '😎🦄';

      expect(pluralizeConcern(gibberish)).toBe(gibberish);
    });
  });
});
