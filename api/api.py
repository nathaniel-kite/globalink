from flask import Flask, jsonify, request
import json
from utils import get_all_mentors, insert_mentee

app = Flask(__name__)

@app.route("/api/test")
def test():
	return {"message": "Hello world!"}

@app.route("/api/get-all-mentors")
def get_all_mentors_endpoint():
	mentor_list = {"mentors": get_all_mentors()}
	return json.dumps(mentor_list, default=str)

@app.route("/api/register", methods=["POST"])
def register():

	insert_mentee(request.json)

	return {"message": "Not implemented."}