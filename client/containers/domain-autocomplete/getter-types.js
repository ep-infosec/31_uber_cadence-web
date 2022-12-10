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

import { typePrefix } from './helpers';

export const DOMAIN_AUTOCOMPLETE_COMBINED_DOMAIN_LIST = typePrefix(
  'COMBINED_DOMAIN_LIST'
);
export const DOMAIN_AUTOCOMPLETE_DOMAIN_LIST = typePrefix('DOMAIN_LIST');
export const DOMAIN_AUTOCOMPLETE_FILTERED_VISITED_DOMAIN_LIST = typePrefix(
  'FILTERED_VISITED_DOMAIN_LIST'
);
export const DOMAIN_AUTOCOMPLETE_IS_LOADING = typePrefix('IS_LOADING');
export const DOMAIN_AUTOCOMPLETE_NAVIGATE_TO_DOMAIN_URL = typePrefix(
  'NAVIGATE_TO_DOMAIN_URL'
);
export const DOMAIN_AUTOCOMPLETE_SEARCH = typePrefix('SEARCH');
export const DOMAIN_AUTOCOMPLETE_SEARCH_URL = typePrefix('SEARCH_URL');
export const DOMAIN_AUTOCOMPLETE_VISITED_DOMAIN_LIST = typePrefix(
  'VISITED_DOMAIN_LIST'
);
