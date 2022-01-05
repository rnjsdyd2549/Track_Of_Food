from flask_restful import Resource, abort
from flask import request, jsonify
from sqlalchemy import func
from geopy import distance

from api_schema import *
from models import Track, Food

'''
api_schema 파일에서 정의된 marshmallow Schema 객체를 가져와서 인스턴스를 생성한다.
marshmallow는 get, post 로 받은 데이터의 검증과, 전송을 위한 포맷팅에 사용된다.
'''
food_input_api_schema = FoodInputApiSchema()
food_output_api_schema = FoodOutputApiSchema()
track_input_api_schema = TrackInputApiSchema()
track_output_api_schema = TrackOutputApiSchema()


class FoodApi(Resource):
    def get(self):
        '''
        marshmallow schema로 get요청으로 받은 파라미터들이 정확한 형식으로 넘어왔는지 검증한다.
        아니라면 errors를 리턴한다.
        '''
        try:
            data = food_input_api_schema.load(request.args)
        except:
            return abort(400)

        '''
        정확한 요청이 넘어왔다면, 쿼리를 수행하고 리턴한다.
        '''

        try:
            food_name = data['food_name']
            search = f'%{food_name}%'
            food_list = Food.query.filter(Food.name.like(search)).all()
        except:
            return abort(500)

        result = food_output_api_schema.dump(food_list, many=True)
        # 이부분 프론트에서 유니코드를 한글로 다시 파싱가능하면 굳이 jsonify안해도됨(json.load()같은게 된다면)
        return {'food_list': result}


class TrackApi(Resource):
    def get(self):
        try:
            data = track_input_api_schema.load(request.args.to_dict())

            walk_dist, jog_dist = data['walk_dist'], data['jog_dist']
            need_more_workout = data['need_more_workout']
            user_lng, user_lat = data['user_lng'], data['user_lat']
        except:
            return abort(400)

        '''
        유저-산책로간 거리는 유저-산책로 시작점간 거리와 유저-산책로 끝점간 거리중 최소값으로 정의한다.
        '''

        def distance_to_track(user_pos, track_pos_s, track_pos_e):
            dis = min(
                distance.geodesic(user_pos, track_pos_s, ellipsoid='GRS-80').km,
                distance.geodesic(user_pos, track_pos_e, ellipsoid='GRS-80').km
            )
            return dis

        '''
        need_more_workout 이 1 이면 유저가 칼로리를 더 소모해야 하는 상태
        0이라면 오히려 칼로리를 더 섭취해야하는 상태이다.
        '''
        if need_more_workout:
            walk_track_list = []
            jog_track_list = []
            user_pos = (user_lat, user_lng)

            '''
            걸어야 하는 거리와 길이가 비슷한 산책로 중, 집에서 가까운것들 위주로 추천
            '''

            try:
                tracks = Track.query.order_by(func.abs(Track.length - walk_dist))
                for track in tracks:
                    track_pos_s = (track.coord_lat_s, track.coord_lng_s)
                    track_pos_e = (track.coord_lat_e, track.coord_lng_e)
                    if distance_to_track(user_pos, track_pos_s, track_pos_e) <= 10:
                        walk_track_list.append(track)
                        if len(walk_track_list) >= 5:
                            break
            except:
                abort(500)

            '''
            조깅해야 하는 거리와 길이가 비슷한 산책로 중, 집에서 가까운것들 위주로 추천
            '''

            try:
                tracks = Track.query.order_by(func.abs(Track.length - jog_dist))
                for track in tracks:
                    track_pos_s = (track.coord_lat_s, track.coord_lng_s)
                    track_pos_e = (track.coord_lat_e, track.coord_lng_e)
                    if distance_to_track(user_pos, track_pos_s, track_pos_e) <= 10:
                        jog_track_list.append(track)
                        if len(jog_track_list) >= 5:
                            break
            except:
                abort(500)

            '''
            marshmallow와 jsonify를 통해서 return할 객체를 formatting(marshal)
            '''

            walk_result = track_output_api_schema.dump(walk_track_list, many=True)
            jog_result = track_output_api_schema.dump(jog_track_list, many=True)
            return jsonify({"walk_track_list": walk_result, "jog_track_list": jog_result})

        else:
            track_list = []
            user_pos = (user_lat, user_lng)

            '''
            거리가 짧은 산책로들 중, 집에서 가까운것들 위주로 추천
            '''

            try:
                tracks = Track.query.order_by(Track.length)
                for track in tracks:
                    track_pos_s = (track.coord_lat_s, track.coord_lng_s)
                    track_pos_e = (track.coord_lat_e, track.coord_lng_e)
                    if distance_to_track(user_pos, track_pos_s, track_pos_e) <= 10:
                        track_list.append(track)
                        if len(track_list) >= 5:
                            break
            except:
                abort(500)

            '''
            marshmallow와 jsonify를 통해서 return할 객체를 formatting(marshal)
            '''

            result = track_output_api_schema.dump(track_list, many=True)
            return jsonify({"walk_track_list": result, "jog_track_list": result})
