const Repository = require('../problem')
const { assert } = require('chai');

describe("Tests Repository", function () {
    describe("constructor", function () {
        it("Returns right instantiation", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            assert.strictEqual(repository.props.name, "string");
            assert.strictEqual(repository.props.age, "number");
            assert.strictEqual(repository.props.birthday, "object");
            assert.strictEqual(typeof repository.data, "object");
            assert.strictEqual(typeof repository.nextId, "function");
            assert.strictEqual(repository.nextId(), 0);
            assert.strictEqual(repository.nextId(), 1);
        });
    });
    describe("add", function () {
        it("Add entity with right data", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity1);
            let first = repository.data.get(0);
            let secind = repository.data.get(1);

            assert.deepEqual(first, entity);
            assert.deepEqual(secind, entity1);
        });
        it("Add entity with missing prop", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: "Pesho",
                age: 22,
            };
            let entity1 = {
                name: "Gosho",
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                age: 18,
                birthday: new Date(1998, 0, 7)
            };
            assert.throw(() => {repository.add(entity) }, Error, `Property birthday is missing from the entity!`);
            assert.throw(() => {repository.add(entity1) }, Error, `Property age is missing from the entity!`);
            assert.throw(() => {repository.add(entity2) }, Error, `Property name is missing from the entity!`);
        });
        it("Add entity with missing prop", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 1,
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 'g',
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: undefined
            };
            assert.throw(() => {repository.add(entity) }, Error, `Property name is not of correct type!`);
            assert.throw(() => {repository.add(entity1) }, Error, `Property age is not of correct type!`);
            assert.throw(() => {repository.add(entity2) }, Error, `Property birthday is not of correct type!`);
        });
        it("Add entity with missing prop", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            assert.strictEqual(repository.add(entity), 0);
            assert.strictEqual(repository.add(entity1), 1);
            assert.strictEqual(repository.add(entity2), 2);
        });
    });
    describe("getId", function () {
        
        it("getId returns the right entity", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity1);
            repository.add(entity2);
            assert.deepEqual(repository.getId(0), entity);
            assert.deepEqual(repository.getId(1), entity1);
            assert.deepEqual(repository.getId(2), entity2);
        });
        it("getId returns the right entity", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            assert.throw(() => { repository.getId(1) }, Error, `Entity with id: 1 does not exist!`);
            assert.throw(() => { repository.getId(100) }, Error, `Entity with id: 100 does not exist!`);
        });
    });
    describe("count", function () {
        it("count", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity1);
            repository.add(entity2);
            assert.strictEqual(repository.count, 3);
            repository.del(0);
            assert.strictEqual(repository.count, 2);
        });
    });
    describe("update", function () {
        it("updates wright", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity1);
            repository.update(1, entity2)
            assert.deepEqual(repository.getId(1), entity2);
            repository.update(1, entity1)
            assert.deepEqual(repository.getId(1), entity1);
        });
        it("update is validating", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: 'kkk'
            };
            let entity3 = {
                name: "Gosho",
                age: 15,
            };
            repository.add(entity);
            repository.add(entity1);
            
            assert.throw(() => { repository.update(1, entity2)}, Error, `Property birthday is not of correct type!`);
            assert.throw(() => { repository.update(1, entity3)}, Error, `Property birthday is missing from the entity!`);
        });
        it("update throws with wrong id", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: 'kkk'
            };
            
            assert.throw(() => { repository.update(6, entity1)}, Error, `Entity with id: 6 does not exist!`);
            assert.throw(() => { repository.update(7, entity2)}, Error, `Entity with id: 7 does not exist!`);
        });
    });
    describe("del", function () {
        it("del wright", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity1);
            repository.del(1)
            assert.deepEqual(repository.count, 1);
            repository.del(0)
            assert.deepEqual(repository.count, 0);
        });
        it("update is validating", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            
            let entity = {
                name: 'ggg',
                age: 15,
                birthday: new Date(1998, 0, 7)
            };
            let entity1 = {
                name: "Gosho",
                age: 2,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 15,
                birthday: 'kkk'
            };
            repository.add(entity);
            repository.add(entity1);
            
            assert.throw(() => { repository.del(6)}, Error, `Entity with id: 6 does not exist!`);
            assert.throw(() => { repository.del(-1)}, Error, `Entity with id: -1 does not exist!`);
        });
    });
});