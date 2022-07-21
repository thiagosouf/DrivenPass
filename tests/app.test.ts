import app from '../src/app.js';
import supertest from 'supertest';

describe("POST /tasks", () => {
    it("given a valid task it should return 200", async () => {
        const body = {
            titulo:"casa",
            nome:"Hanna",
            senha:"12345"
        };

        const result = await supertest(app).post("/createwifi").send(body).set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1ODE1Mzc5Mn0.KYQ7XKRYz8gQJineXoxnDREcDysGKSekxj7aRxk1e6A");
        const status = result.status;
        
        expect(status).toEqual(200);
    });

    it("given a invalid task it should return 422", async () => {
        const body = {
            titulo:"",
            nome:"",
            senha:""
        };

        const result = await supertest(app).post("/createwifi").send(body).set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1ODE1Mzc5Mn0.KYQ7XKRYz8gQJineXoxnDREcDysGKSekxj7aRxk1e6A");
        const status = result.status;
        
        expect(status).toEqual(422);
    })

});
