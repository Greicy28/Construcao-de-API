import Express from "express";
import { createOrder, readOrders, readOrderById, updateOrder, deleteOrder } from "./businessrules.js";
import { body, validationResult } from "express-validator";
import fs from "fs";
import { loadData } from "./businessrules.js";

loadData();
const server = Express();
const port = 1234;

server.use(Express.json());

const validateOrder = [
    body('cliente').notEmpty().withMessage('Cliente é obrigatório'),
    body('descricao').notEmpty().withMessage('Descrição é obrigatória'),
    body('valor').isFloat({ gt: 0 }).withMessage('Valor deve ser um número positivo'),
    body('quantidade').isInt({ gt: 0 }).withMessage('Quantidade deve ser um inteiro maior que 0')
];

server.post("/orders", validateOrder, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const order = req.body;
    const newOrder = createOrder(order);
    res.status(201).json(newOrder);
});

server.get("/orders", (req, res) => {
    const orders = readOrders();
    res.json(orders);
});

server.get("/orders/:id", (req, res) => {
    const id = req.params.id;
    const order = readOrderById(id);
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: "Ordem não encontrada!" });
    }
});

server.put("/orders/:id", validateOrder, (req, res) => {
    const id = req.params.id;
    const updatedOrder = req.body;
    const order = updateOrder(id, updatedOrder);
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: "Ordem não encontrada!" });
    }
});

server.delete("/orders/:id", (req, res) => {
    const id = req.params.id;
    const order = deleteOrder(id);
    if (order) {
        res.json({ message: "Ordem excluída com sucesso!" });
    } else {
        res.status(404).json({ message: "Ordem não encontrada!" });
    }
});

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
