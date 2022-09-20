"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../src/app"));
var database_1 = __importDefault(require("../src/config/database"));
var testFactory = __importStar(require("./factories/testFactory"));
var userFactory = __importStar(require("./factories/userFactory"));
var client = (0, supertest_1["default"])(app_1["default"]);
beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1["default"].$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE users RESTART IDENTITY"], ["TRUNCATE TABLE users RESTART IDENTITY"])))];
            case 1:
                _a.sent();
                return [4 /*yield*/, database_1["default"].$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE tests RESTART IDENTITY"], ["TRUNCATE TABLE tests RESTART IDENTITY"])))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe("/test", function () {
    it("Should return status 201 if valid schema", function () { return __awaiter(void 0, void 0, void 0, function () {
        var test, user, userLogin, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testFactory.test()];
                case 1:
                    test = _a.sent();
                    user = userFactory.user();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/signup")
                            .send(__assign(__assign({}, user), { passwordConfirm: user.password }))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/signin").send(user)];
                case 3:
                    userLogin = _a.sent();
                    token = userLogin === null || userLogin === void 0 ? void 0 : userLogin.text;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/test").send(test).set({ Authorization: "Bearer ".concat(token) })];
                case 4:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should return status 404 if teacher or disicipline does not exist", function () { return __awaiter(void 0, void 0, void 0, function () {
        var test, user, userLogin, token, responseDiscipline, responseTeacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testFactory.test()];
                case 1:
                    test = _a.sent();
                    user = userFactory.user();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/signup")
                            .send(__assign(__assign({}, user), { passwordConfirm: user.password }))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/signin").send(user)];
                case 3:
                    userLogin = _a.sent();
                    token = userLogin === null || userLogin === void 0 ? void 0 : userLogin.text;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/test").send(__assign(__assign({}, test), { discipline: "non_existing_test" })).set({ Authorization: "Bearer ".concat(token) })];
                case 4:
                    responseDiscipline = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/test").send(__assign(__assign({}, test), { teacher: "non_existing_test" })).set({ Authorization: "Bearer ".concat(token) })];
                case 5:
                    responseTeacher = _a.sent();
                    expect(responseDiscipline.status).toBe(404);
                    expect(responseDiscipline.status).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should return status 401 if authorization is invalid", function () { return __awaiter(void 0, void 0, void 0, function () {
        var test, user, userLogin, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testFactory.test()];
                case 1:
                    test = _a.sent();
                    user = userFactory.user();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/signup")
                            .send(__assign(__assign({}, user), { passwordConfirm: user.password }))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/signin").send(user)];
                case 3:
                    userLogin = _a.sent();
                    token = userLogin === null || userLogin === void 0 ? void 0 : userLogin.text;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/test").send(test).set({ Authorization: "Bearer ".concat(token, "0") })];
                case 4:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should return status 200 and an array", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, userLogin, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = userFactory.user();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/signup")
                            .send(__assign(__assign({}, user), { passwordConfirm: user.password }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/signin").send(user)];
                case 2:
                    userLogin = _a.sent();
                    token = "Bearer ".concat(userLogin === null || userLogin === void 0 ? void 0 : userLogin.text);
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get("/test/teacher").send().set('Authorization', token)];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body).toBeInstanceOf(Array);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should return status 200 and an array", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, userLogin, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = userFactory.user();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/signup")
                            .send(__assign(__assign({}, user), { passwordConfirm: user.password }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/signin").send(user)];
                case 2:
                    userLogin = _a.sent();
                    token = "Bearer ".concat(userLogin === null || userLogin === void 0 ? void 0 : userLogin.text);
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get("/test/disciplines").send().set('Authorization', token)];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body).toBeInstanceOf(Array);
                    return [2 /*return*/];
            }
        });
    }); });
});
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1["default"].$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var templateObject_1, templateObject_2;
