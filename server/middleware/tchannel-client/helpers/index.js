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

const cliTransform = require('./cli-transform');
const formatBody = require('./format-body');
const formatMethod = require('./format-method');
const formatRequestName = require('./format-request-name');
const lookupAsync = require('./lookup-async');
const makeChannels = require('./make-channels');
const makeRequest = require('./make-request');
const uiTransform = require('./ui-transform');
const withDomainPaging = require('./with-domain-paging');
const withNextPageTokenBodyTransform = require('./with-next-page-token-body-transform');
const withVerboseWorkflowExecution = require('./with-verbose-workflow-execution');
const withWorkflowExecution = require('./with-workflow-execution');

module.exports = {
  cliTransform,
  formatBody,
  formatMethod,
  formatRequestName,
  lookupAsync,
  makeChannels,
  makeRequest,
  uiTransform,
  withDomainPaging,
  withNextPageTokenBodyTransform,
  withVerboseWorkflowExecution,
  withWorkflowExecution,
};
