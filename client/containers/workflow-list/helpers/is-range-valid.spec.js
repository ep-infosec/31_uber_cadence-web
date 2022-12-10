// Copyright (c) 2021-2022 Uber Technologies Inc.
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

import moment from 'moment';
import isRangeValid from './is-range-valid';

describe('isRangeValid', () => {
  describe('minStartDate = 5 days before now', () => {
    const now = '2021-05-06';
    const minStartDate = moment(now).subtract(5, 'days');

    describe('range = "last-3-days"', () => {
      const range = 'last-3-days';

      it('should return true', () => {
        const output = isRangeValid({ minStartDate, now, range });

        expect(output).toEqual(true);
      });
    });

    describe('range = "last-7-days"', () => {
      const range = 'last-7-days';

      it('should return false', () => {
        const output = isRangeValid({ minStartDate, now, range });

        expect(output).toEqual(false);
      });
    });

    describe('range = { startTime: "2021-05-01", endTime: "2021-05-06" }', () => {
      const range = { startTime: '2021-05-01', endTime: '2021-05-06' };

      it('should return true', () => {
        const output = isRangeValid({ minStartDate, now, range });

        expect(output).toEqual(true);
      });
    });

    describe('range = { startTime: "2021-04-28", endTime: "2021-05-06" }', () => {
      const range = { startTime: '2021-04-28', endTime: '2021-05-06' };

      it('should return false', () => {
        const output = isRangeValid({ minStartDate, now, range });

        expect(output).toEqual(false);
      });
    });

    describe('range = { startTime: "2021-05-06", endTime: "2021-05-01" }', () => {
      const range = { startTime: '2021-05-06', endTime: '2021-05-01' };

      it('should return false', () => {
        const output = isRangeValid({ minStartDate, now, range });

        expect(output).toEqual(false);
      });
    });
  });
});
