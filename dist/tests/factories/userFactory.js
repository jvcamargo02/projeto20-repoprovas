"use strict";
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
exports.createUser = exports.generateToken = exports.user = void 0;
var faker_1 = require("@faker-js/faker");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var database_1 = __importDefault(require("../../src/config/database"));
var usersServices_1 = require("../../src/services/usersServices");
function user() {
    return {
        email: faker_1.faker.internet.email(),
        password: faker_1.faker.internet.password()
    };
}
exports.user = user;
function generateToken() {
    return __awaiter(this, void 0, void 0, function () {
        var userCreated, userDb, userId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userCreated = user();
                    return [4 /*yield*/, database_1["default"].users.create({
                            data: userCreated
                        })];
                case 1:
                    userDb = _a.sent();
                    userId = userDb.id;
                    console.log(process.env.JWT_SECRET);
                    return [2 /*return*/, jsonwebtoken_1["default"].sign({ userId: userId }, process.env.JWT_SECRET, {
                            expiresIn: "30d"
                        })];
            }
        });
    });
}
exports.generateToken = generateToken;
function createUser() {
    return __awaiter(this, void 0, void 0, function () {
        var userCreated, hashedPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userCreated = user();
                    return [4 /*yield*/, (0, usersServices_1.hashPassword)(userCreated.password)];
                case 1:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, database_1["default"].users.create({
                            data: {
                                email: userCreated.email,
                                password: hashedPassword
                            }
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, userCreated];
            }
        });
    });
}
exports.createUser = createUser;
