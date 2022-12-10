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

const formatEnum = require('../format-enum');
const formatFailureDetails = require('../format-failure-details');
const formatPayload = require('../format-payload');
const formatPayloadMap = require('../format-payload-map');
const formatDurationToSeconds = require('../format-duration-to-seconds');

const formatWorkflowExecutionContinuedAsNewEventAttributes = ({
  backoffStartInterval,
  decisionTaskCompletedEventId,
  executionStartToCloseTimeout,
  failure,
  header,
  initiator,
  input,
  memo,
  searchAttributes,
  taskList,
  taskStartToCloseTimeout,
  ...eventAttributes
}) => ({
  ...eventAttributes,
  backoffStartIntervalInSeconds: formatDurationToSeconds(backoffStartInterval),
  decisionTaskCompletedEventId: parseInt(decisionTaskCompletedEventId),
  executionStartToCloseTimeoutSeconds: formatDurationToSeconds(
    executionStartToCloseTimeout
  ),
  failureDetails: formatFailureDetails(failure),
  failureReason: failure?.reason || '',
  header: formatPayloadMap(header, 'fields'),
  initiator: formatEnum(initiator, 'CONTINUE_AS_NEW_INITIATOR'),
  input: formatPayload(input),
  memo: formatPayloadMap(memo, 'fields'),
  searchAttributes: formatPayloadMap(searchAttributes, 'indexedFields'),
  taskList: {
    kind: formatEnum(taskList?.kind, 'TASK_LIST_KIND'),
    name: taskList?.name || null,
  },
  taskStartToCloseTimeoutSeconds: formatDurationToSeconds(
    taskStartToCloseTimeout
  ),
});

module.exports = formatWorkflowExecutionContinuedAsNewEventAttributes;
