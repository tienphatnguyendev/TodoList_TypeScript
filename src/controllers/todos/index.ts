import { Response, Request } from "express"
import { ITodo } from "./../../types/todo"
import Todo from "../../models/todos"


const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find();
        
        res
            .status(200)
            .json({todos});
    } catch (error) {
        throw error;
    }
}

const addTodo =async (req: Request, res: Response): Promise<void> => {
    try {
        if(req.body ?? null) {
            const body = req.body as Pick<ITodo, "name" | "description" | "status">;

            const todo: ITodo = new Todo({
                name: body.name,
                description: body.description,
                status: body.status
            });

            const newTodo: ITodo = await todo.save();
            const allTodos: ITodo[] = await Todo.find();

            res
                .status(201)
                .json({
                    message: "Todo added",
                    todo: newTodo,
                    todos: allTodos
                })
        }
    } catch (error) {
        throw error;
    }
}


const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("hello world");
    } catch (error) {
        throw error;
    }
}

const deleteTodo = async (req:Request, res: Response): Promise<void> => {};

const testTodo = async (req: Request, res:Response): Promise<void> => {
    console.log("testaa");
}

export {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    testTodo
}