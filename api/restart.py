import pymongo 
import pprint
from pymongo import MongoClient 
import jsonify 
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
    lionel_languages =[{'name': 'Spanish', 'proficiency': 'Native'}, {'name':'English', 'proficiency': 'Conversational'}]
    tim_languages =[{'name': 'Mandarin', 'proficiency': 'Native'}, {'name': 'German', 'proficiency': 'Proficient'}]
    rakesh_languages = [{'name': 'Hindi', 'proficiency': 'Native'}, {'name': 'English', 'proficiency':'Fluent'}]
    
    clear_mentors() 
    


    
    sofia_data = {'name': 'Sofia Gonzalez', 'origin_country': 'Columbia', 
                  'description': 'Hi, my name is Sofia Gonzalez and I am a project manager with 25+ years of experience in the corporate world. I would love to chat!', 
                  'current_role': 'Project Manager at Microsoft', 'languages': sofia_languages, 'skills': ['Retirement Funds', 'Networking', 'Management Roles', 'Finance Management'], 
                  'profile_pic': 'sofia.png',
                   'current_location': 'Atlanta, Georgia', 'industry': 'Tech'}
    
    carlos_data = {'name': 'Carlos Vargas', 'origin_country': 'Mexico', 
                   'description': 'Hello, I would love to chat about anything from career work, acclimating to the US, or basketball. Feel free to reach out!',
                   'current_role': 'Creative Directory at ESPN', 'languages': carlos_languages,
                   'skills': ['Work-Life Balance', 'Networking', 'Adjusting to Culture', 'Visa Issues'], 
                   'profile_pic': 'carlos.png',
                   'current_location': 'Atlanta, Georgia', 'industry': 'Sports Media'}
    chris_data = {'name': 'Chris Williams', 'origin_country': 'South Africa', 
                   'description': 'Hi, I love all things software and tech. Do not hesitate to reach out if you want to geek out about coding or talk about the job search process!',
                   'current_role': 'Software Developer at Google', 'languages': chris_languages,
                   'skills': ['Cloud Computing', 'API Development', 'AGILE', 'Interview Skills', 'Dynamic Programming'], 
                   'profile_pic': 'chris.png',
                   'current_location': 'Charleston, South Carolina', 'industry': 'Tech'}
    markus_data = {'name': 'Markus Wagner', 'origin_country': 'Germany', 
                   'description': 'Hey there! My name is Markus, I would love to speak about my experiences and get the opportunity to guide you.',
                   'current_role': 'Technical Counsultant at Apple', 'languages': markus_languages,
                   'skills': ['Interpersonal Skills', 'Time Management', 'Language Learning', 'Self-Employment'], 
                   'profile_pic': 'markus.png',
                   'current_location': 'Silicon Valley, California', 'industry': 'Tech'}
    
    lionel_data = {'name': 'Lionel', 'origin_country': 'Spain', 
                   'description': 'Hey there! My name is Lionel, I would love to speak about my experiences and get the opportunity to guide you.',
                    'current_role': 'Manager at Netflix', 'languages': lionel_languages,
                    'skills': ['Networking', 'Language Learning', 'Self-Employment'], 
                   'profile_pic': 'lionel.png',
                   'current_location': 'Austin, Texas', 'industry': 'Entertainment'}
    tim_data = {'name': 'Tim', 'origin_country': 'China', 
                   'description': 'Hey there! My name is Tim, I would love to speak about my experiences and get the opportunity to guide you.',
                    'current_role': 'Product Manager at Deloitte', 'languages': tim_languages,
                    'skills': ['SCRUM', 'Financial Management', 'Self-Employment'], 
                   'profile_pic': 'tim.png',
                   'current_location': 'Silicon Valley, California', 'industry': 'Management'}
    rakesh_data = {'name': 'Rakesh', 'origin_country': 'India', 
                   'description': 'Hey there! My name is Rakesh, I would love to speak about my experiences and get the opportunity to guide you.',
                    'current_role': 'Accountant at Amazon', 'languages': rakesh_languages,
                    'skills': ['Excel', 'Financial Management', 'Self-Employment'], 
                   'profile_pic': 'rakesh.png',
                   'current_location': 'Los Angeles, California', 'industry': 'Finance'}
    olaf_data = {}
    # rakesh_data = {}
    # tim_data = {} 
    # vladmir_data = {}
    
   # mentee_collection.insert_one(test_mentee_data)
    # mentor_collection.insert_one(test_mentor_data1)
    mentor_collection.insert_one(sofia_data)
    mentor_collection.insert_one(carlos_data)
    mentor_collection.insert_one(chris_data)
    mentor_collection.insert_one(markus_data)
    mentor_collection.insert_one(lionel_data)
    mentor_collection.insert_one(tim_data)
    mentor_collection.insert_one(rakesh_data)
    # search_mentee_by_name('sammy','beard')
    # search_mentor_by_language(['spanish, proficient', 'english, fluent']) 
    #mentee_collection.insert_one()
    mentors = get_all_mentors()
    # pprint.pprint(mentors)
    specified_mentors_languages = [{'name': 'Spanish', 'proficiency': 'Native'}, {'name':'English', 'proficiency': 'Fluent'}]
    match_mentors_with_mentees('Tech')

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

    matched_users = mentee_collection.find({'username': username, 'password': password})
    return jsonify(matched_users)

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


        

main()