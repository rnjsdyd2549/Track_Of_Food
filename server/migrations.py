from app import db, create_app
from app.models import Track, Food, District
import csv
import os

create_app().app_context().push()

db.drop_all()
db.create_all()

data_path = os.path.dirname(os.getcwd()) + '/data/'

with open(data_path + 'track.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        track = Track(
            id=row['ID'],
            name=row['NAME'],
            address=row['ADDRESS'],
            length=float(row['LENGTH']),
            course=row['COURSE'],
            difficulty=str(row['DIFFICULTY'][-4:]),
            description=row['DESCRIPTION'],
            img_url=row['IMG_URL'],
            coord_lng_s=float(row['LNG_S']),
            coord_lat_s=float(row['LAT_S']),
            coord_lng_e=float(row['LNG_E']),
            coord_lat_e=float(row['LAT_E']),
            coord_list=row['COORD_LIST']
        )
        db.session.add(track)
    db.session.commit()


with open(data_path + 'food.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        food = Food(
            id=row['ID'],
            name=row['NAME'],
            carb=row['CARB'],
            protein=row['PROTEIN'],
            fat=row['FAT'],
            salt=row['SALT'],
            kcal=row['KCAL']
        )
        db.session.add(food)
    db.session.commit()


with open(data_path + 'district.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        district = District(
            id=row['ID'],
            name=row['NAME']
        )
        db.session.add(district)
    db.session.commit()
