import os
import csv

from models import Track, Food
from app import app, db

app.app_context().push()

db.drop_all()
db.create_all()

data_path = os.path.dirname(os.getcwd()) + '/data/'

with open(data_path + 'track.csv', 'rt', encoding='UTF8') as f:
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


with open(data_path + 'food.csv', 'rt', encoding='UTF8') as f:
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

'''
with open(data_path + 'district.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        district = District(
            id=row['id'],
            name=row['name']
        )
        db.session.add(district)
    db.session.commit()



df = pd.read_csv(data_path + 'track.csv', sep=',', encoding='utf-8-sig')  # Replace Excel_file_name with your excel sheet name
#df = df.astype({'id': str, 'name': str, 'address': str, })
df.to_sql('track', con=engine, schema=db.metadata, index=False, if_exists='replace')  # Replace Table_name with your sql table name

df = pd.read_csv(data_path + 'food.csv', sep=',', encoding='utf-8-sig')  # Replace Excel_file_name with your excel sheet name
print(df)
df.to_sql('food', con=engine, schema=db.metadata, index=False, if_exists='replace')  # Replace Table_name with your sql table name
'''
