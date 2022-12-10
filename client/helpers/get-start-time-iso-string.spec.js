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

import getStartTimeIsoString from './get-start-time-iso-string';

describe('getStartTimeIsoString', () => {
  describe('When range = undefined and startTimeString = "2020-03-30T00:00:00Z"', () => {
    it('should return "2020-03-30T00:00:00Z".', () => {
      const range = undefined;
      const startTimeString = '2020-03-30T00:00:00Z';
      const output = getStartTimeIsoString(range, startTimeString);

      expect(output).toEqual(startTimeString);
    });
  });

  describe('When moment is set to March 31th 2020 and range = "last-30-days"', () => {
    it('should return "2020-03-01T00:00:00.000Z".', () => {
      jest
        .spyOn(Date, 'now')
        .mockImplementation(() => new Date(Date.UTC(2020, 2, 31)).getTime());
      const range = 'last-30-days';
      const startTimeString = '';
      const output = getStartTimeIsoString(range, startTimeString);

      expect(output).toEqual('2020-03-01T00:00:00.000Z');
    });
  });
});
