db = {
    'user': 'root',
    'password': '1234',
    'host': 'localhost',
    'database': 'db',
    'port' : '3308'
}

SQLALCHEMY_DATABASE_URI = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
SQLALCHEMY_TRACK_MODIFICATIONS = False
JSON_AS_ASCII = False
