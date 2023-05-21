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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTodo = exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const todos_1 = __importDefault(require("../../models/todos"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todos_1.default.find();
        res
            .status(200)
            .json({ todos });
    }
    catch (error) {
        throw error;
    }
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req.body) !== null && _a !== void 0 ? _a : null) {
            const body = req.body;
            const todo = new todos_1.default({
                name: body.name,
                description: body.description,
                status: body.status
            });
            const newTodo = yield todo.save();
            const allTodos = yield todos_1.default.find();
            res
                .status(201)
                .json({
                message: "Todo added",
                todo: newTodo,
                todos: allTodos
            });
        }
    }
    catch (error) {
        throw error;
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hello world");
    }
    catch (error) {
        throw error;
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteTodo = deleteTodo;
const testTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("testaa");
});
exports.testTodo = testTodo;
