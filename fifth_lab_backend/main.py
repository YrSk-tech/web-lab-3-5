from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
Pen_list = []


class Pen(BaseModel):
    id: Optional[str]
    name: str
    description: str
    price: int


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/pen')
def post(pen: Pen):
    temp_id = 1
    while str(temp_id) in map(lambda i: i.id, pen_list):
        temp_id += 1
    pen.id = str(temp_id)
    pen_list.append(pen)
    print(pen_list)


@app.get('/pen')
def get():
    return pen_list


@app.put('/pen/{id}')
def put(id, pen: Pen):
    for i in range(len(pen_list)):
        if pen_list[i].id == id:
            pen_list[i] = pen
            return


@app.delete('/pen/{id}')
def delete(id):
    for i in range(len(pen_list)):
        if pen_list[i].id == id:
            return pen_list.pop(i)
