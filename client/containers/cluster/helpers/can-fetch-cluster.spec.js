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

import canFetchCluster from './can-fetch-cluster';

describe('canFetchCluster', () => {
  describe('expiryDateTime = null', () => {
    const expiryDateTime = null;

    it('should return true.', () => {
      const output = canFetchCluster(expiryDateTime);

      expect(output).toEqual(true);
    });
  });

  describe('expiryDateTime = 1 hour from now', () => {
    const expiryDateTime = new Date(Date.UTC(2020, 2, 31, 1));

    beforeEach(() => {
      jest
        .spyOn(Date, 'now')
        .mockImplementation(() => new Date(Date.UTC(2020, 2, 31)).getTime());
    });

    it('should return false.', () => {
      const output = canFetchCluster(expiryDateTime);

      expect(output).toEqual(false);
    });
  });

  describe('expiryDateTime = 1 hour past from now', () => {
    const expiryDateTime = new Date(Date.UTC(2020, 2, 31, 0));

    beforeEach(() => {
      jest
        .spyOn(Date, 'now')
        .mockImplementation(() => new Date(Date.UTC(2020, 2, 31, 1)).getTime());
    });

    it('should return true.', () => {
      const output = canFetchCluster(expiryDateTime);

      expect(output).toEqual(true);
    });
  });
});
