dbconf = {
    'user': 'root',
    'password': 'pass',
    'endpoint': 'db',
    'port': '3306',
    'database': 'db',
}

SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{dbconf['user']}:{dbconf['password']}@{dbconf['endpoint']}/{dbconf['database']}"
SQLALCHEMY_TRACK_MODIFICATIONS = False
JSON_AS_ASCII = False


def createuri():  # for load_data.py only
    dbconf['endpoint'] = 'localhost'
    return f"mysql+pymysql://{dbconf['user']}:{dbconf['password']}@{dbconf['endpoint']}/{dbconf['database']}"
