from flask import Flask, jsonify, request
import json
from utils import get_all_mentors, insert_mentee, check_account

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

	return {"message": "User registered successfully."}


@app.route('/api/login', methods=['POST'])
def login():
	username = request.json.get('username')
	password = request.json.get('password')

	account_check = check_account(username, password)

	print(account_check)

	return json.dumps(account_check, default=str)