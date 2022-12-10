// polyfills for web browser to node
import 'babel-polyfill';
import AbortController from 'node-abort-controller';
import atob from 'atob';
import { injectMomentDurationFormat, jsonTryParse } from '~helpers';
import { enableFetchMocks } from 'jest-fetch-mock';
import { mockUserAgent } from 'jest-useragent-mock';
import Vue from 'vue';
import Vuex from 'vuex';

global.atob = atob;

global.JSON.tryParse = jsonTryParse;

injectMomentDurationFormat();

if (!window.AbortController) {
  window.AbortController = AbortController;
}

enableFetchMocks();

window.fetch = global.fetch;

mockUserAgent('chrome');

Vue.use(Vuex);
