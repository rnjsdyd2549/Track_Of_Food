from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from . import config

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    # orm
    db.init_app(app)

    # add api
    from .api import FoodApi, TrackApi
    api_obj = Api(app)
    api_obj.add_resource(FoodApi, '/food')
    api_obj.add_resource(TrackApi, '/track')

    return app
