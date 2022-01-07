import os
import csv

from models import Track, Food
from app import app, db

app.app_context().push()

db.drop_all()
db.create_all()

#data_path = os.path.dirname(os.getcwd()) + '/data/'

with open('track.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        track = Track(
            id=row['id'],
            name=row['name'],
            address=row['address'],
            length=float(row['length']),
            course=row['course'],
            difficulty=str(row['difficulty'][-4:]),
            description=row['description'],
            img_url=row['img_url'],
            coord_lng_s=float(row['coord_lng_s']),
            coord_lat_s=float(row['coord_lat_s']),
            coord_lng_e=float(row['coord_lng_e']),
            coord_lat_e=float(row['coord_lat_e']),
            coord_list=row['coord_list']
        )
        db.session.add(track)
    db.session.commit()


with open('food.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        food = Food(
            id=row['id'],
            name=row['name'],
            carb=row['carb'],
            protein=row['protein'],
            fat=row['fat'],
            salt=row['salt'],
            kcal=row['kcal']
        )
        db.session.add(food)
    db.session.commit()
