from flask_restful import Resource, abort
from flask import request, jsonify, json
from .api_schema import *
from .models import Food, Track
import math

'''
api_schema 파일에서 정의된 marshmallow Schema 객체를 가져와서 인스턴스를 생성한다.
marshmallow는 get, post 로 받은 데이터의 검증과, 전송을 위한 포맷팅에 사용된다.
'''
food_input_api_schema = FoodInputApiSchema()
food_output_api_schema = FoodOutputApiSchema()
track_input_api_schema = TrackInputApiSchema()
track_output_api_schema = TrackOutputApiSchema()


'''
class UserApi(Resource):
    def get(self, district_name=None):
        if not district_name:   # 입력이 들어오지 았을 때 처리
            pass

        district = District.query.filter(
            District.name.like(f'{district_name}%')).all()

        if not district:  # name에 해당하는 구가 없는 경우 처리 ex) 삵
            pass

        return district
'''


class FoodApi(Resource):
    def get(self):
        '''
        marshmallow schema로 get요청으로 받은 파라미터들이 정확한 형식으로 넘어왔는지 검증한다.
        아니라면 errors를 리턴한다.
        '''
        errors = food_input_api_schema.validate(json.dump(request.args))
        if errors:
            return abort(400, str(errors))

        '''
        정확한 요청이 넘어왔다면, 쿼리를 수행하고 리턴한다.
        '''
        food_name = request.args.get('food_name')
        search = f'%{food_name}%'
        food_list = Food.query.filter(Food.name.like(search)).all()

        result = food_output_api_schema.dump(food_list, many=True)
        # 이부분 프론트에서 유니코드를 한글로 다시 파싱가능하면 굳이 jsonify안해도됨(json.load()같은게 된다면)
        return jsonify({"food_list": result})


class TrackApi(Resource):
    def get(self):
        '''
        marshmallow schema로 get요청으로 받은 파라미터들이 정확한 형식으로 넘어왔는지 검증한다.
        아니라면 errors를 리턴한다.

        errors = food_input_api_schema.validate(request.args)
        if errors:
            # error bundle 필요? return abort(400, str(errors))
            return abort(400)
        '''

        togo_dist = request.args.get('togo_dist')
        kcal = request.args.get('kcal')
        user_lng = request.args.get('user_lng')
        user_lat = request.args.get('user_lat')

        try:
            togo_dist = float(togo_dist)
            kcal = float(kcal)
            user_lng = float(user_lng)
            user_lat = float(user_lat)
        except:
            return abort(400)

        '''
        두 점 사이의 유클리드 거리 계산 함수 정의.
        '''
        def distance(pos1, pos2):
            return math.sqrt((pos1[0] - pos2[0])**2 + (pos1[1] - pos2[1])**2)

        '''
        유저 위치에서 가장가까운 산책로들을
        가까운 순서대로 {limit}개 만큼 리스트로 리턴하는 함수 정의.
        '''
        def near_tracks(tracks, limit):
            track_list = []

            for track in tracks:
                dist = min(
                    distance((user_lng, user_lat),
                             (track.coord_lng_s, track.coord_lat_s)),
                    distance((user_lng, user_lat),
                             (track.coord_lng_e, track.coord_lat_e))
                )
                track_list.append((dist, track.id))

            track_list.sort()

            return track_list[:limit]

        '''
        kcal이 0이상이면 권장량만큼 칼로리를 섭취하지 못한것을 의미한다.
        그러므로, 가장가까운 5개의 초급코스를 추천한다.

        그렇지 않을 경우, 운동해야하는 거리와 산책로 길이의 차이가 가장 작은 산책로를 우선으로 해서 5개를 추천한다.
        '''
        if kcal >= 0:
            track_list = []
            tracks = Track.query.filter(Track.difficulty == '초급코스').all()

            for track in near_tracks(tracks, 5):
                _track = Track.query.filter(Track.id == track[1]).first()
                track_list.append(_track)

            result = track_output_api_schema.dump(track_list, many=True)
            return jsonify({"track_list": result})

        else:
            track_list = []
            tracks = Track.query.all()
            for track in near_tracks(tracks, 5):
                _track = Track.query.filter(Track.id == track[1]).first()
                track_list.append(_track)

            track_list.sort(key=lambda t: abs(t.length - togo_dist))
            result = track_output_api_schema.dump(track_list, many=True)
            return jsonify({"track_list": result})
