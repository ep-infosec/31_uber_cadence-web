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

const atob = require('atob');
const formatEnum = require('../format-enum');
const formatPayload = require('../format-payload');
const formatPayloadMap = require('../format-payload-map');
const formatDurationToSeconds = require('../format-duration-to-seconds');
const formatRetryPolicy = require('./format-retry-policy');

const formatStartChildWorkflowExecutionInitiatedEventAttributes = ({
  control,
  decisionTaskCompletedEventId,
  delayStart,
  executionStartToCloseTimeout,
  header,
  input,
  memo,
  parentClosePolicy,
  retryPolicy,
  searchAttributes,
  taskList,
  taskStartToCloseTimeout,
  workflowIdReusePolicy,
  ...eventAttributes
}) => ({
  ...eventAttributes,
  control: control ? parseInt(atob(control)) : null,
  decisionTaskCompletedEventId: parseInt(decisionTaskCompletedEventId),
  delayStartSeconds: formatDurationToSeconds(delayStart),
  executionStartToCloseTimeoutSeconds: formatDurationToSeconds(
    executionStartToCloseTimeout
  ),
  header: formatPayloadMap(header, 'fields'),
  input: formatPayload(input),
  memo: formatPayloadMap(memo, 'fields'),
  parentClosePolicy: formatEnum(parentClosePolicy, 'PARENT_CLOSE_POLICY'),
  retryPolicy: formatRetryPolicy(retryPolicy),
  searchAttributes: formatPayloadMap(searchAttributes, 'indexedFields'),
  taskList: {
    kind: formatEnum(taskList?.kind, 'TASK_LIST_KIND'),
    name: taskList?.name || null,
  },
  taskStartToCloseTimeoutSeconds: formatDurationToSeconds(
    taskStartToCloseTimeout
  ),
  workflowIdReusePolicy: formatEnum(
    workflowIdReusePolicy,
    'WORKFLOW_ID_REUSE_POLICY',
    'pascal'
  ),
});

module.exports = formatStartChildWorkflowExecutionInitiatedEventAttributes;
