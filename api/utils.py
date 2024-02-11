import pymongo 
import pprint
from pymongo import MongoClient 
import jsonify
import json
# from models.mentee import Mentee
# import sys

# sys.path.append("..")
# import models

# dont think i need 
#app.config['MONGO_URI'] = 'mongodb+srv://admin:globalink@cluster0.81ycgvc.mongodb.net/?retryWrites=true&w=majority'

# Links MongoDB to current application and allows for access to specific collections 
cluster = MongoClient('mongodb+srv://admin:globalink@cluster0.81ycgvc.mongodb.net/?retryWrites=true&w=majority')
db = cluster['globalink']

mentee_collection = db['mentee']
mentor_collection = db['mentor']

def clear_mentees(): 
    mentee_collection.delete_many({})

def clear_mentors(): 
    mentor_collection.delete_many({})

def get_all_mentors(): 
    mentors = []
    for doc in mentor_collection.find():
        mentors.append(doc)
        #pprint.pprint(doc)
    return mentors

# TO DO 
# def put_mentee(mentee): 

# def put_mentor(mentor):

# deletes mentee by first and last name 
def delete_mentee(mentee_name, mentee_last_name): 
    mentee_collection.delete_one({'first_name': mentee_name, 'last_name': mentee_last_name})

# deletes mentor by name 
def delete_mentor(mentor_name): 
    mentor_collection.delete_one({'name': mentor_name})

# searches and retrieves desired user by first name and last name 
def search_mentee_by_name(first_name, last_name):
    
    mentee = mentee_collection.find_one({'first_name': first_name, "last_name": last_name})
    
    # prints object in pretty format (FOR TESTING)
    pprint.pprint(mentee)
    return mentee 
def get_mentee_by_username(username): 
    mentee = mentee_collection.find_one({'username': username})
    return mentee 
def search_mentor_by_language(languages): 

    mentor = mentor_collection.find_one({'languages': languages})
    pprint.pprint(mentor)
    return mentor 

def insert_mentee(mentee_to_insert): 
    mentee_collection.insert_one(mentee_to_insert)

def check_account(username, password): 

    matched_users = mentee_collection.find_one({'username': username, 'password': password})
    return json.dumps(matched_users, default=str)

def match_mentors_with_mentees(industry): 
    
    print('\n\n\n')
    matches = mentor_collection.find({'industry': industry})

    # matches = mentor_collection.find({'industry': industry}, {'languages': languages})
    # for mentee in mentee_collection.find(): 
    #     mentee_industries = []
    #     mentee_industries = mentee.get('industry')
        # mentee_id = mentee.get('_id')
        # matches[mentee_id] = [] #add new entry to matches dictionary
        
        # for mentor in mentor_collection.find(): 
        #     mentor_industries = mentor.get('industry')
        #     mentor_id = mentor.get('_id')

        #     if set(mentee_industry).intersection(set(mentor_industries)): 
        #         matches[mentee_id].append(mentor_id) 
    print('\n\n\n')
   
    for match in matches: 
        pprint.pprint(match)
    # # pprint.pprint(matches)
    # print("this is matches2")
    # print(matches2)
    return matches 