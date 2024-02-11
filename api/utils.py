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
    sofia_languages = [{'name': 'Spanish', 'proficiency': 'Native'}, {'name': 'English', 'proficiency': 'Fluent'}]
    carlos_languages = [{'name': 'Spanish', 'proficiency': 'Native'}, {'name': 'English', 'proficiency': 'Fluent'}]
    chris_languages = [{'name': 'Zulu', 'proficiency': 'Native'}, {'name': 'English', 'proficiency': 'Fluent'}]
    markus_languages = [{'name': 'German', 'proficiency': 'Native'}, {'name': 'English', 'proficiency': 'Fluent'}, {'name': 'Swedish', 'proficiency': 'Proficient'}, {'name': 'Mandarin', 'proficiency': 'Conversational'}]

    clear_mentees() 
    clear_mentors() 
    test_mentee_data = {'first_name': 'sammy', 'last_name': 'beard', 'username': 'sam8beard', 'password': '1234', 'profilePic': 'test'}
    test_mentor_data1 = {'name': 'Nate Kite', 'origin_country': 'Slovakia', 'description': 'Eyes of emerald that shimmer under the sunlight', 'current_role': 'Project Manager at Microsoft', 
                        'languages': ['spanish, proficient', 'english, fluent'], 'sklls': ['talking', 'coding']}
    test_mentor_data2 = {'name': 'Yushus Komarlu', 'origin_country': 'Fiji', 'description': 'Large tantalizing figure', 'current_role': 'Software Dev at Google', 
                        'languages': ['german, proficient', 'english, fluent'], 'sklls': ['cooking', 'coding']}
    test_mentor_data3 = {'name': 'Venn Reddy', 'origin_country': 'Japan', 'description': 'Big boy with a big heart', 'current_role': 'Product Manager at Amazon', 
                        'languages': ['japanese, proficient', 'english, fluent'], 'sklls': ['bad mitton', 'coding']}
    test_mentor_data3 = {'name': 'Venn Reddy', 'origin_country': 'Japan', 'description': 'Big boy with a big heart', 'current_role': 'Product Manager at Amazon', 
                        'languages': ['japanese, proficient', 'english, fluent'], 'sklls': ['bad mitton', 'coding']}
    
    sofia_data = {'name': 'Sofia Gonzalez', 'origin_country': 'Columbia', 
                  'description': 'Hi, my name is Sofia Gonzalez and I am a project manager with 25+ years of experience in the corporate world. I would love to chat!', 
                  'current_role': 'Project Manager at Microsoft', 'languages': sofia_languages, 'skills': ['Retirement Funds', 'Networking', 'Management Roles', 'Finance Management'], 
                  'profile_pic': 'globalink\src\assets\sofia.png',
                   'current_location': 'Atlanta, Georgia'}
    
    carlos_data = {'name': 'Carlos Vargas', 'origin_country': 'Mexico', 
                   'description': 'Hello, I would love to chat about anything from career work, acclimating to the US, or basketball. Feel free to reach out!',
                   'current_role': 'Creative Directory at ESPN', 'languages': carlos_languages,
                   'skills': ['Work-Life Balance', 'Networking', 'Adjusting to Culture', 'Visa Issues'], 
                   'profile_pic': 'globalink\src\assets\carlos.png',
                   'current_location': 'Atlanta, Georgia'}
    chris_data = {'name': 'Chris Williams', 'origin_country': 'South Africa', 
                   'description': 'Hi, I love all things software and tech. Do not hesitate to reach out if you want to geek out about coding or talk about the job search process!',
                   'current_role': 'Software Developer at Google', 'languages': chris_languages,
                   'skills': ['Cloud Computing', 'API Development', 'AGILE', 'Interview Skills', 'Dynamic Programming'], 
                   'profile_pic': 'globalink\src\assets\chris.png',
                   'current_location': 'Charleston, South Carolina'}
    markus_data = {'name': 'Markus Wagner', 'origin_country': 'Germany', 
                   'description': 'Hey there! My name is Markus, I would love to speak about my experiences and get the opportunity to guide you.',
                   'current_role': 'Technical Counsultant at Apple', 'languages': markus_languages,
                   'skills': ['Interpersonal Skills', 'Time Management', 'Language Learning', 'Self-Employment'], 
                   'profile_pic': 'globalink\src\assets\markus.png',
                   'current_location': 'Silicon Valley, California'}
    
    
    mentee_collection.insert_one(test_mentee_data)
    # mentor_collection.insert_one(test_mentor_data1)
    mentor_collection.insert_one(sofia_data)
    mentor_collection.insert_one(carlos_data)
    mentor_collection.insert_one(chris_data)
    mentor_collection.insert_one(markus_data)
    # search_mentee_by_name('sammy','beard')
    # search_mentor_by_language(['spanish, proficient', 'english, fluent']) 

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