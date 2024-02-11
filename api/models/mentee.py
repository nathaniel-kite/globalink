from flask import Flask
from flask_pymongo import PyMongo
import pymongo

class Mentee: 
    def __init__ (self, first_name, last_name, username, password, profile_pic, industry, description, education, country_of_origin, languages, current_location): 
        self.first_name = first_name
        self.last_name = last_name 
        self.username = username
        self.password = password 
        self.profile_pic = profile_pic
        self.industry = industry 
        self.description = description 
        self.education = education
        self.country_of_origin = country_of_origin 
        self.languages = languages 
        self.current_location = current_location 