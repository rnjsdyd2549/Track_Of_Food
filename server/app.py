from flask import Flask
from flask_restful import Api

from models import db
from api import FoodApi, TrackApi
import config

# flask app
app = Flask(__name__)
app.config.from_object(config)

# orm
db.init_app(app)

# add api
api = Api(app, catch_all_404s=True)
api.add_resource(FoodApi, '/api/food')
api.add_resource(TrackApi, '/api/track')
