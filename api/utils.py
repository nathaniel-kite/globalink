import pymongo 
import pprint
from pymongo import MongoClient 
# from models.mentee import Mentee
from flask import Flask, jsonify, request
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
<<<<<<< Updated upstream
    clear_mentees(mentee_collection) 
    clear_mentors(mentor_collection) 
=======
    sofia_languages = [{'name': 'Spanish', 'proficiency': 4}, {'name': 'English', 'proficiency': 3}]
    carlos_languages = [{'name': 'Spanish', 'proficiency': 4}, {'name': 'English', 'proficiency': 3}]
    chris_languages = [{'name': 'Zulu', 'proficiency': 4}, {'name': 'English', 'proficiency': 3}]
    markus_languages = [{'name': 'German', 'proficiency': 4}, {'name': 'English', 'proficiency': 3}, {'name': 'Swedish', 'proficiency': '2'}, {'name': 'Mandarin', 'proficiency': '1'}]

    clear_mentees() 
    clear_mentors() 
>>>>>>> Stashed changes
    test_mentee_data = {'first_name': 'sammy', 'last_name': 'beard', 'username': 'sam8beard', 'password': '1234', 'profilePic': 'test'}
    test_mentor_data1 = {'name': 'Nate Kite', 'origin_country': 'Slovakia', 'description': 'Eyes of emerald that shimmer under the sunlight', 'current_rate': 50, 
                        'languages': ['spanish, proficient', 'english, fluent'], 'sklls': ['talking', 'coding']}
    test_mentor_data2 = {'name': 'Yushus Komarlu', 'origin_country': 'Fiji', 'description': 'Large tantalizing figure', 'current_rate': 70, 
                        'languages': ['german, proficient', 'english, fluent'], 'sklls': ['cooking', 'coding']}
    test_mentor_data3 = {'name': 'Venn Reddy', 'origin_country': 'Japan', 'description': 'Big boy with a big heart', 'current_rate': 10, 
                        'languages': ['japanese, proficient', 'english, fluent'], 'sklls': ['bad mitton', 'coding']}
    test_mentor_data3 = {'name': 'Venn Reddy', 'origin_country': 'Japan', 'description': 'Big boy with a big heart', 'current_role': 'Product Manager at Amazon', 
                        'languages': ['japanese, proficient', 'english, fluent'], 'sklls': ['bad mitton', 'coding']}
    
    sofia_data = {'name': 'Sofia Gonzalez', 'origin_country': 'Bogota, Columbia', 
                  'description': 'Hi, my name is Sofia Gonzalez and I am a project manager with 25+ years of experience in the corporate world. I would love to chat!', 
                  'current_role': 'Project Manager at Microsoft', 'languages': sofia_languages, 'skills': ['Retirement Funds', 'Networking', 'Management Roles', 'Finance Management'], 
                  'profile_pic': 'https://cdn.discordapp.com/attachments/1043592304910422027/1206038730482257970/image_10.png?ex=65da8e18&is=65c81918&hm=08bd8dd63fbc87ddc8de9ac264e971237432e9740be944df2286233b51229a91&',
                   'current_location': 'Atlanta, Georgia'}
    
    carlos_data = {'name': 'Carlos Vargas', 'origin_country': 'Mexico City, Mexico', 
                   'description': 'Hello, I would love to chat about anything from career work, acclimating to the US, or basketball. Feel free to reach out!',
                   'current_role': 'Creative Directory at ESPN', 'languages': carlos_languages,
                   'skills': ['Work-Life Balance', 'Networking', 'Adjusting to Culture', 'Visa Issues'], 
                   'profile_pic': 'https://cdn.discordapp.com/attachments/1043592304910422027/1206039229352644628/unsplash_SJvDxw0azqw.png?ex=65da8e8f&is=65c8198f&hm=66f4344c20ebae8e5cb834d9ded9776ad4c95c8594728a4646cd36ed6b686668&',
                   'current_location': 'Atlanta, Georgia'}
    
    mentee_collection.insert_one(test_mentee_data)
    # mentor_collection.insert_one(test_mentor_data1)
    mentor_collection.insert_one(sofia_data)
    mentor_collection.insert_one(carlos_data)
    # search_mentee_by_name('sammy','beard')
    # search_mentor_by_language(['spanish, proficient', 'english, fluent']) 

    mentors = get_all_mentors(mentor_collection)
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