from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api

import config


app = Flask(__name__)
app.config.from_object(config)

# ORM
db = SQLAlchemy(app)

# add api
api = Api(app)


if __name__ == '__main__':
    app.run(debug=True)
