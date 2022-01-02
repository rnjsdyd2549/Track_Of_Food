from app import db


class Track(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(150))
    address = db.Column(db.String(200))
    distance = db.Column(db.Float)
    time = db.Column(db.Float)
    kcal = db.Column(db.Float)
    course = db.Column(db.Integer)
    difficulty = db.Column(db.Integer)
    intro_text = db.Column(db.String(400))
    img_url = db.Column(db.String(250))
    coord_x = db.Column(db.Float)
    coord_y = db.Column(db.Float)
    coord_list = db.Column(db.String(20000))


class Food(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(200))
    carb = db.Column(db.Float)
    protein = db.Column(db.Float)
    fat = db.Column(db.Float)
    sugar = db.Column(db.Float)
    salt = db.Column(db.Float)
    kcal = db.Column(db.Float)


class District(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(3))


'''
Track
----------------------------------
name: 산책로 이름
address: 산책로 주소
distance: 산책로 총 길이
time: 소요시간
kcal: 소모 칼로리
course: 구간 (경로)
difficulty: 난이도
intro_text: 한줄소개
img_url: 대표이미지
coord_x: 시작점 x좌표
coord_y: 시작점 y좌표
coord_list: 경로상 좌표들 리스트
----------------------------------

Food
--------------------
name: 음식 이름
carb: 탄수화물 함량
protein: 단백질 함량
fat: 지방 함량
sugar: 당 함량
kcal: 칼로리
--------------------

District
---------------------------------
name: 서울시 내 구 (행정구역) 이름
---------------------------------
'''
