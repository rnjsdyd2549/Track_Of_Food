from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from models import db
from api import FoodApi, TrackApi
import config

#flask_cors 사용
from flask_cors import CORS, cross_origin

app = Flask(__name__)
#flask_cors 사용
CORS(app)

app.config.from_object(config)

# orm
db.init_app(app)

# add api
api = Api(app, catch_all_404s=True)
api.add_resource(FoodApi, '/food')
api.add_resource(TrackApi, '/track')

# run
if __name__ == '__main__':
    app.run(debug=True)
