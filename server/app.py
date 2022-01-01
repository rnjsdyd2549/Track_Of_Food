from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from api import user_api, food_api, track_api
import config


app = Flask(__name__)
app.config.from_object(config)

# ORM
db = SQLAlchemy(app)

# add api
api = Api(app)

api.add_resource(user_api.User, "/user", "/user/<string:d_name>")
api.add_resource(food_api.Food, "/food", "/food/<string:f_name">)
api.add_resource(track_api.Track, "/track", "/track/<string:t_name>")

if __name__ == '__main__':
    app.run(debug=True)
