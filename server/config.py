db = {
    'user': 'root',
    'password': '1234',
    'host': 'localhost',
    'database': 'db'
}

SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{db['user']}:{db['password']}@{db['host']}/{db['database']}?charset=utf8mb4"
SQLALCHEMY_TRACK_MODIFICATIONS = False
JSON_AS_ASCII = False
