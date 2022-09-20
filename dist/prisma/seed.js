"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var database_1 = __importDefault(require("../src/config/database"));
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE \"users\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"users\" RESTART IDENTITY CASCADE"])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].terms.upsert({ where: { number: 1 }, update: {}, create: { number: 1 } })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].terms.upsert({ where: { number: 2 }, update: {}, create: { number: 2 } })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].terms.upsert({ where: { number: 3 }, update: {}, create: { number: 3 } })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].terms.upsert({ where: { number: 4 }, update: {}, create: { number: 4 } })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].terms.upsert({ where: { number: 5 }, update: {}, create: { number: 5 } })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].terms.upsert({ where: { number: 6 }, update: {}, create: { number: 6 } })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].categories.upsert({ where: { name: "Projeto" }, update: {}, create: { name: "Projeto" } })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].categories.upsert({ where: { name: "Prática" }, update: {}, create: { name: "Prática" } })];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].categories.upsert({ where: { name: "Recuperação" }, update: {}, create: { name: "Recuperação" } })];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].disciplines.upsert({
                            where: {
                                name: "HTML e CSS"
                            },
                            update: { termId: 1 },
                            create: { name: "HTML e CSS", termId: 1 }
                        })];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].disciplines.upsert({
                            where: { name: "JavaScript" },
                            update: { termId: 2 },
                            create: { name: "JavaScript", termId: 2 }
                        })];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].disciplines.upsert({
                            where: { name: "React" },
                            update: { termId: 3 },
                            create: { name: "React", termId: 3 }
                        })];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].disciplines.upsert({
                            where: { name: "Humildade" },
                            update: { termId: 1 },
                            create: { name: "Humildade", termId: 1 }
                        })];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].disciplines.upsert({
                            where: { name: "Planejamento" },
                            update: { termId: 2 },
                            create: { name: "Planejamento", termId: 2 }
                        })];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].disciplines.upsert({
                            where: { name: "Autoconfiança" },
                            update: { termId: 3 },
                            create: { name: "Autoconfiança", termId: 3 }
                        })];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].teachers.upsert({ where: { name: "Diego Pinho" }, update: {}, create: { name: "Diego Pinho" } })];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].teachers.upsert({ where: { name: "Bruna Hamori" }, update: {}, create: { name: "Bruna Hamori" } })];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, database_1["default"].teacherDisciplines.createMany({
                            data: [
                                {
                                    teacherId: 1,
                                    disciplineId: 1
                                },
                                {
                                    teacherId: 1,
                                    disciplineId: 2
                                },
                                {
                                    teacherId: 1,
                                    disciplineId: 3
                                },
                                {
                                    teacherId: 2,
                                    disciplineId: 4
                                }, {
                                    teacherId: 2,
                                    disciplineId: 5
                                }, {
                                    teacherId: 2,
                                    disciplineId: 6
                                },
                            ]
                        })];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (err) {
    console.log(err);
    process.exit(1);
})["finally"](function () { return database_1["default"].$disconnect(); });
var templateObject_1;
