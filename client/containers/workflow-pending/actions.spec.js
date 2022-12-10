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

import { ROUTE_UPDATE_QUERY } from '../route/action-types';
import actions from './actions';
import { WORKFLOW_PENDING_FILTER_CHANGED } from './action-types';

describe('workflow pending actions', () => {
  describe('when actions[WORKFLOW_PENDING_FILTER_CHANGED] is called', () => {
    it('should dispatch ROUTE_UPDATE_QUERY with the filter that is changed.', () => {
      const dispatch = jest.fn();
      const filter = 'activity';

      actions[WORKFLOW_PENDING_FILTER_CHANGED]({ dispatch }, filter);
      expect(dispatch).toHaveBeenCalledWith(ROUTE_UPDATE_QUERY, {
        filter: 'activity',
      });
    });
  });
});
