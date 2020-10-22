import request from 'supertest';
import path from 'path';


import app from '../app';

describe('Sum Values', ()=>{
  it('should return [3,1,5,1]', async ()=>{
    const response = await request(app).post('/sum').send({
      num1:[1,0,6],
      num2:[3,0,4,5]
    });
    
    expect(response.body).toEqual({result:[3,1,5,1]});
  });

  it('should return [6,2,5,1]', async ()=>{
    const response = await request(app).post('/sum').send({
      num1:[3,0,6],
      num2:[5,9,4,5]
    });
    
    expect(response.body).toEqual({result:[6,2,5,1]});
  });

  it('should give error to not pass one of the keys', async ()=>{
    const response = await request(app).post('/sum').send({
      num2:[5,9,4,5]
    });
    expect(response.body).toEqual({error: "Invalid data or something missing"})

  });


  it('should give error to pass invalid data value', async ()=>{
    const response = await request(app).post('/sum').send({
      num1:["a", "b", 1],
      num2:[5,9,4,5]
    });
    expect(response.body).toEqual({error: "Invalid data or something missing"})

  });

  it('should return [3,1,5,1] even passing as string', async ()=>{
    const response = await request(app).post('/sum').send({
      num1:["1","0","6"],
      num2:["3","0","4","5"]
    });
    
    expect(response.body).toEqual({result:[3,1,5,1]});
  });
})