import { query as query$1 } from 'dahlia-graphql-client';
import { useState, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var graphqlConfig = {
    endpoint: '/graphql',
};
function config(options) {
    graphqlConfig = __assign({}, graphqlConfig, options);
}

var _this = undefined;
var query = function (input, variables) { return __awaiter(_this, void 0, void 0, function () {
    var endpoint, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = graphqlConfig.endpoint;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, query$1(endpoint, input, variables)];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                throw error_1;
            case 4: return [2 /*return*/];
        }
    });
}); };

var _this$1 = undefined;
var useQuery = function (input, variables) {
    var initialState = {};
    var _a = useState(initialState), result = _a[0], setState = _a[1];
    var unmounted = false;
    var fetchData = function (variables) {
        if (variables === void 0) { variables = {}; }
        return __awaiter(_this$1, void 0, void 0, function () {
            var data_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setState(function (prev) { return (__assign({}, prev, { loading: true })); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, query(input, variables)];
                    case 2:
                        data_1 = _a.sent();
                        if (!unmounted)
                            setState(function (prev) { return (__assign({}, prev, { loading: false, data: data_1 })); });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (!unmounted)
                            setState(function (prev) { return (__assign({}, prev, { loading: false, error: error_1 })); });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    var refetch = function (variables) {
        fetchData(variables);
    };
    useEffect(function () {
        fetchData(variables);
        return function () {
            unmounted = true;
        };
    }, []);
    return __assign({}, result, { refetch: refetch });
};

var _this$2 = undefined;
var useMutate = function (input) {
    var initialState = {};
    var _a = useState(initialState), result = _a[0], setState = _a[1];
    var fetchData = function (variables) {
        if (variables === void 0) { variables = {}; }
        return __awaiter(_this$2, void 0, void 0, function () {
            var data_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, query(input, variables)];
                    case 1:
                        data_1 = _a.sent();
                        setState(function (prev) { return (__assign({}, prev, { loading: false, data: data_1 })); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        setState(function (prev) { return (__assign({}, prev, { loading: false, error: error_1 })); });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var mutate = function (variables) {
        setState(function (prev) { return (__assign({}, prev, { loading: true })); });
        fetchData(variables);
    };
    var out = [mutate, result];
    return out;
};

export { config, graphqlConfig, query, useMutate, useQuery };
//# sourceMappingURL=index.es.js.map
