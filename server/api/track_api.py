from flask import jsonify
from flask_restful import Resource, abort
import math

from typing import TYPE_CHECKING
if TYPE_CHECKING:
  from models import Track


class TrackInfo(Resource):
  
  def get(self, kcal, user_lng, user_lat, togo_dist):
  
    # 좌표 비교를 통해 [(산책로이름, 사용자와의 거리), (), ] 를 반환하는 함수
    def distance(pos1, pos2):
        return math.sqrt((pos1[0] - pos2[0])**2 + (pos1[1] - pos2[1])**2)

    def near_tracks(tracks, limit):
      track_list = []
      
      for track in tracks:
          dist = min(distance((user_lng, user_lat), (track.lng_s, track.lat_s)), distance((user_lng, user_lat), (track.lng_e, track.lat_e)))
          track_list.append((dist, track.id))
        
      track_list.sort()
      
      return track_list[:limit]
    
    def serialization(lis, num):
      result = []
      for l in lis:
        result.append({
          'id': l.id,                 'name': l.name,
          'address': l.address,       'distance': l.distance,
          'course': l.course,         'difficulty': l.difficulty,
          'intro_text': l.intro_text, 'img_url': l.img_url,
          'lng_s': l.lng_s,           'lng_e': l.lng_e,
          'lat_s': l.lat_s,           'lat_e': l.lat_s,
          'coord_list': l.coord_list, 'time': l.distance / num
        })
      return result

    # get 요청 잘못 들어왔을 때 예외처리
    if not kcal or not user_lng or user_lat or not togo_dist: 
      pass
    
    if kcal >= 0:
      result= []
      tracks = Track.query.filter(Track.difficulty == '초급코스').all()

      for track in near_tracks(tracks, 5):
        _track = Track.query.filter(Track.id==track[1]).first()
        result.append(_track)
        
      return jsonify(serialization(result, 4)), jsonify(serialization(result, 8))
      
    else:
      result = [] # 산책로 객체 갖고 있는 list.
      tracks = Track.query.all()
      for track in near_tracks(tracks, 5):
        _track = Track.query.filter(Track.id==track[1]).first()
        result.append(_track) 
      
      walk_list = sorted(result, key=lambda x : abs(x.distance - togo_dist))
      jog_list = sorted(result, key=lambda x : abs(x.distance - togo_dist/2))
      
      return jsonify(serialization(walk_list, 4)), jsonify(serialization(jog_list, 8))
