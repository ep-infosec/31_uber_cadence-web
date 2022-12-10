// Copyright (c) 2017-2022 Uber Technologies Inc.
//
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import updateQueryFromRange from './update-query-from-range';

describe('updateQueryFromRange', () => {
  describe('When updatedRange = "last-30-days"', () => {
    it('should return range = "last-30-days".', () => {
      const updatedRange = 'last-30-days';
      const output = updateQueryFromRange({ updatedRange });

      expect(output.range).toEqual('last-30-days');
    });
  });

  describe('When updatedRange = { endTime: Date("2020-03-30T00:00:00.000Z"), startTime: Date("2020-03-01T00:00:00.000Z") }', () => {
    const updatedRange = {
      endTime: new Date('2020-03-30T00:00:00.000Z'),
      startTime: new Date('2020-03-01T00:00:00.000Z'),
    };

    it('should return endTime = "2020-03-30T00:00:00.000Z".', () => {
      const output = updateQueryFromRange({ updatedRange });

      expect(output.endTime).toEqual('2020-03-30T00:00:00.000Z');
    });

    it('should return startTime = "2020-03-01T00:00:00.000Z".', () => {
      const output = updateQueryFromRange({ updatedRange });

      expect(output.startTime).toEqual('2020-03-01T00:00:00.000Z');
    });
  });
});
