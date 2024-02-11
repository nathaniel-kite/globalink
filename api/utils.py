import pymongo 
import pprint
from pymongo import MongoClient 
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

# FOR TESTING PURPOSES 
def main(): 
    clear_mentees() 
    clear_mentors() 
    test_mentee_data = {'first_name': 'sammy', 'last_name': 'beard', 'username': 'sam8beard', 'password': '1234', 'profilePic': 'test'}
    test_mentor_data1 = {'name': 'Nate Kite', 'origin_country': 'Slovakia', 'description': 'Eyes of emerald that shimmer under the sunlight', 'current_rate': 50, 
                        'languages': ['spanish, proficient', 'english, fluent'], 'sklls': ['talking', 'coding']}
    test_mentor_data2 = {'name': 'Yushus Komarlu', 'origin_country': 'Fiji', 'description': 'Large tantalizing figure', 'current_rate': 70, 
                        'languages': ['german, proficient', 'english, fluent'], 'sklls': ['cooking', 'coding']}
    test_mentor_data3 = {'name': 'Venn Reddy', 'origin_country': 'Japan', 'description': 'Big boy with a big heart', 'current_rate': 10, 
                        'languages': ['japanese, proficient', 'english, fluent'], 'sklls': ['bad mitton', 'coding']}
    mentee_collection.insert_one(test_mentee_data)
    mentor_collection.insert_one(test_mentor_data1)
    mentor_collection.insert_one(test_mentor_data2)
    mentor_collection.insert_one(test_mentor_data3)
    search_mentee_by_name('sammy','beard')
    search_mentor_by_language(['spanish, proficient', 'english, fluent']) 

    mentors = get_all_mentors()
    pprint.pprint(mentors)

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

def search_mentor_by_language(languages): 

    mentor = mentor_collection.find_one({'languages': languages})
    pprint.pprint(mentor)
    return mentor 
    
main()