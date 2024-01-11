/* Unit tests for the type converter util */
import { TypeConversionError } from '../../src/errors/typeConversionError';
import TypeConverterUtil from '../../src/utils/typeConverterUtil';

/* Type converter util tests */
describe('Type Converter Util Tests', () => {
  /* Setup before each test */
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  /* Convert to number tests */
  describe('Convert To Number Tests', () => {
    /* Test when converting to a number is possible */
    it('Should successfully convert the input to a number if possible.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToNumber');

      /* Set up and call function */
      const value = '5';
      const result = TypeConverterUtil.convertToNumber(value);

      /* Compare against expected */
      expect(TypeConverterUtil.convertToNumber).toHaveBeenCalled();
      expect(typeof result).toBe('number');
      expect(result).toBe(5);
    });

    /* Test when converting to a number isn't possible */
    it('Should throw an error if the input cannot be converted to a number.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToNumber');

      /* Set up */
      const value = '100ABC';

      /* Call function and compare against expected */
      expect(() => TypeConverterUtil.convertToNumber(value)).toThrow(TypeConversionError);
      expect(TypeConverterUtil.convertToNumber).toHaveBeenCalled();
    });
  });

  /* Convert to boolean tests */
  describe('Convert To Boolean Tests', () => {
    /* Test when converting to a truthy boolean is possible */
    it('Should successfully convert the input to a truthy boolean if possible.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToBoolean');

      /* Set up and call function */
      const value = 'TRUE';
      const result = TypeConverterUtil.convertToBoolean(value);

      /* Compare against expected */
      expect(TypeConverterUtil.convertToBoolean).toHaveBeenCalled();
      expect(typeof result).toBe('boolean');
      expect(result).toBe(true);
    });

    /* Test when converting to a falsy boolean is possible */
    it('Should successfully convert the input to a falsy boolean if possible.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToBoolean');

      /* Set up and call function */
      const value = 'FALSE';
      const result = TypeConverterUtil.convertToBoolean(value);

      /* Compare against expected */
      expect(TypeConverterUtil.convertToBoolean).toHaveBeenCalled();
      expect(typeof result).toBe('boolean');
      expect(result).toBe(false);
    });

    /* Test when converting to a boolean isn't possible */
    it('Should throw an error if the input cannot be converted to a number.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToBoolean');

      /* Set up */
      const value = 'NOT_A_BOOLEAN';

      /* Call function and compare against expected */
      expect(() => TypeConverterUtil.convertToBoolean(value)).toThrow(TypeConversionError);
      expect(TypeConverterUtil.convertToBoolean).toHaveBeenCalled();
    });
  });

  /* Convert to date tests */
  describe('Convert To Date Tests', () => {
    /* Test when converting to a date is possible as a unix timestamp*/
    it('Should successfully convert a unix timestamp to a date.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToDate');

      /* Set up and call function */
      const value = '1000';
      const result = TypeConverterUtil.convertToDate(value);

      /* Compare against expected */
      expect(TypeConverterUtil.convertToDate).toHaveBeenCalled();
      expect(result.toJSON()).toBe('1970-01-01T00:00:01.000Z');
    });

    /* Test when converting to a date is possible as a valid date string */
    it('Should successfully convert a date string to a date.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToDate');

      /* Set up and call function */
      const value = 'Wed Dec 31 1969';
      const result = TypeConverterUtil.convertToDate(value);

      /* Compare against expected */
      expect(TypeConverterUtil.convertToDate).toHaveBeenCalled();
      expect(result.toJSON()).toBe('1969-12-31T08:00:00.000Z');
    });

    /* Test when converting to a date is not possible */
    it('Should throw an error if the input cannot be converted to a date.', () => {
      /* Spy on the function under test */
      jest.spyOn(TypeConverterUtil, 'convertToDate');

      /* Set up  */
      const value = 'not a date';

      /* Call function and compare against expected */
      expect(() => TypeConverterUtil.convertToDate(value)).toThrow(TypeConversionError);
      expect(TypeConverterUtil.convertToDate).toHaveBeenCalled();
    });
  });
});