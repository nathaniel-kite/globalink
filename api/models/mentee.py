from flask import Flask
from flask_pymongo import PyMongo
import pymongo

class Mentee: 
    def __init__ (self, first_name, last_name, username, password, profilePic): 
        self.first_name = first_name
        self.last_name = last_name 
        self.username = username
        self.password = password 
        self.profilePic = profilePic