const db = require('./db');

describe('db module', () => {

  describe('db.all()', () => {
    let result;

    beforeEach(() => {
      result = db.all();
    });

    test('should be a function', () => {
      expect(db.all).toBeDefined();
      expect(typeof db.all).toBe('function');
    });

    test('should return a non-empty Array', () => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    test('should return Objects with `id` and `name` properties', () => {
      result.forEach(o => {
        expect(Object.keys(o)).toEqual(['id', 'name']);

        expect(typeof o.id).toBe('string');
        expect(typeof o.name).toBe('string');
      });
    })
  });

  describe('db.byId()', () => {
    /*
      {
        "id": "bridge-41S-138-C",
        "name": "MCKENZIE CREEK CULVERT,   Hwy. 17",
        "lat": 49.686,
        "lng": -92.4925,
        "year": 1899,
        "length": 54,
        "width": null
      },
    */

    test('should be a function', () => {
      expect(db.byId).toBeDefined();
      expect(typeof db.byId).toBe('function');
    });

    test('should return nothing if the id is "empty"', () => {
      expect(db.byId()).toBeUndefined();
      expect(db.byId(undefined)).toBeUndefined();
      expect(db.byId(null)).toBeUndefined();
      expect(db.byId('')).toBeUndefined();
    });

    /*
    test('should return the expected Bridge Object for a given id (v1)', () => {
      const id = 'bridge-41S-138-C';
      const result = db.byId(id);
      expect(typeof result).toBe('object');
      expect(result.id).toEqual(id);
      expect(result.name).toEqual('MCKENZIE CREEK CULVERT,   Hwy. 17');
      expect(result.lat).toEqual(49.686);
      expect(result.lng).toEqual(-92.4925);
      expect(result.year).toEqual(1899);
      expect(result.length).toEqual(54);
      expect(result.width).toBeNull();
    });
    */

    test('should return the expected Bridge Object for a given id (v2)', () => {
      const sample = db.all()[0];
      const result = db.byId(sample.id);

      expect(typeof result).toBe('object');
      expect(result.id).toEqual(sample.id);
      expect(result.name).toEqual(sample.name);
      expect(typeof result.lat).toBe('number');
      expect(typeof result.lng).toBe('number');
      expect(typeof result.year).toBe('number');

      if(result.length) {
        expect(typeof result.length).toBe('number');
      } else {
        expect(result.length).toBeNull();
      }

      if(result.width) {
        expect(typeof result.width).toBe('number');
      } else {
        expect(result.width).toBeNull();
      }
    });
  });
});
