db = {
    'user': 'root',
    'password': '1234',
    'endpoint': '127.0.0.1',
    'port': '3306',
    'database': 'db',
}

SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{db['user']}:{db['password']}@{db['endpoint']}/{db['database']}"
SQLALCHEMY_TRACK_MODIFICATIONS = False
JSON_AS_ASCII = False
