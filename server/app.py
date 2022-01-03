from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS
from api.user_api import *
from api.food_api import *
from api.track_api import *
import config


app = Flask(__name__)
app.config.from_object(config)

# ORM
db = SQLAlchemy(app)

# Cross-Origin Resource Shaging
CORS(app)      

# add api
api = Api(app)

api.add_resource(UserInfo, "/user/", "/user/<string:d_name>")
api.add_resource(FoodInfo, "/food/", "/food/<string:f_name>")
api.add_resource(TrackInfo, "/track")
  

if __name__ == '__main__':
    app.run(debug=True)
