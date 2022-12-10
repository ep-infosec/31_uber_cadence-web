// Copyright (c) 2022 Uber Technologies Inc.
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

import formatEnum from './format-enum';

describe('formatEnum', () => {
  it('should return null when enum contains INVALID', () => {
    const input = ['CONTAINS_INVALID'];
    const output = formatEnum(input[0]);

    expect(output).toEqual(null);
  });

  it('should format enum by removing prefix and converts to snake case (by default)', () => {
    const input = ['PREFIX_ENUM_SNAKE_VALUE', 'PREFIX_ENUM'];
    const output = formatEnum(...input);

    expect(output).toEqual('SNAKE_VALUE');
  });

  it('should format enum by removing prefix and convert to pascal case when caseFormat is pascal.', () => {
    const input = ['PREFIX_ENUM_PASCAL_VALUE', 'PREFIX_ENUM', 'pascal'];
    const output = formatEnum(...input);

    expect(output).toEqual('PascalValue');
  });
});
