from flask import Flask
from flask_pymongo import PyMongo
import pymongo

class Mentor: 
    def __init__(self, name, origin_country, description, current_rate, languages, skills): 
        self.name = name 
        self.origin_country = origin_country 
        self.description = description 
        self.current_rate = current_rate 
        self.languages = languages 
        self.skills = skills 