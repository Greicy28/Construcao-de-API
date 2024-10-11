import fs from 'fs';

function loadData() {
    try {
        const dataBuffer = fs.readFileSync('data.json');
        const jsonData = dataBuffer.toString();
        data = JSON.parse(jsonData);
        lastId = data.length ? data[data.length - 1].id : 0;
    } catch (error) {
        data = [];
        lastId = 0;
    }
}

function saveData() {
    fs.writeFileSync('data.json', JSON.stringify(data));
}

let data = [];
let lastId = 0;

function createOrder(order) {
    lastId += 1;
    order.id = lastId;
    data.push(order);
    saveData();
    return order;
}

function readOrders() {
    return data;
}

function readOrderById(id) {
    return data.find((order) => order.id === parseInt(id));
}

function updateOrder(id, updatedOrder) {
    const index = data.findIndex((order) => order.id === parseInt(id));
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedOrder, id: data[index].id };
        saveData();
        return data[index];
    }
    return null;
}

function deleteOrder(id) {
    const index = data.findIndex((order) => order.id === parseInt(id));
    if (index !== -1) {
        const deletedOrder = data.splice(index, 1);
        saveData();
        return deletedOrder[0];
    }
    return null;
}

export { createOrder, readOrders, readOrderById, updateOrder, deleteOrder };
export {loadData}