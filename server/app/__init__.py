from flask import Flask
from flask_restful import Api
from . import config
from .api import FoodApi, TrackApi
from .models import db

app = Flask(__name__)
app.config.from_object(config)


# add api
api_obj = Api(app)
api_obj.add_resource(FoodApi, '/food')
api_obj.add_resource(TrackApi, '/track')

# orm
db.init_app(app)
