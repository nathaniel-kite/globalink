from flask import Flask, jsonify, request
import json
from utils import get_all_mentors, insert_mentee
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo

app = Flask(__name__)

# THIS IS NEW
app.config['JWT_SECRET_KEY'] = '1234'
app.config['MONGO_URI'] = 'mongodb+srv://admin:globalink@cluster0.81ycgvc.mongodb.net/?retryWrites=true&w=majority'

jwt = JWTManager(app)
bcrypt = Bcrypt(app)
mongo = PyMongo(app)

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

    if not username or not password: 
        return jsonify({'error': 'Username and password are requried'}), 400
    
    mentee_selected = mongo.db.mentee.find_one({'username': username})
    
    if not mentee_selected or not mentee_selected['password'] == password:
        return jsonify({'error': 'Invalid username or password'}), 401
    
    access_token = create_access_token(identity=username)
    return jsonify({'access_token': access_token}), 200