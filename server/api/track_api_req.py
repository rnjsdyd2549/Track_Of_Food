from flask import jsonify
from flask_restful import Resource, abort, reqparse
import math

from typing import TYPE_CHECKING
if TYPE_CHECKING:
  from models import Track
  

parser = reqparse.RequestParser()
parser.add_argument('kcal', type=float, required= True, help="kcal is not given to server")
parser.add_argument('user_lng', type=float, required= True, help="user_lng is not given to server")
parser.add_argument('user_lat', type=float, required= True, help="user lat is not given to server")
parser.add_argument('walk_dist', type=float, required= True, help="walk_dist is not given to server")
parser.add_argument('jog_dist', type=float, required= True, help="jog_dist is not given to server")


class TrackInfo(Resource):
  def __init__(self):
      self.kcal = parser.parse_args().get('kcal', None)
      self.user_lng = parser.parse_args().get('user_lng', None)
      self.user_lat = parser.parse_args().get('user_lat', None)
      self.walk_dist = parser.parsea_args().get('walk_dist', None)
      self.jog_dist = parser.parsea_args().get('jog_dist', None)
      
      
  def get(self):
    # 좌표 비교를 통해 [(산책로이름, 사용자와의 거리), (), ] 를 반환하는 함수
    def distance(pos1, pos2):
        return math.sqrt((pos1[0] - pos2[0])**2 + (pos1[1] - pos2[1])**2)

    def near_tracks(tracks, limit):
      track_list = []
      
      for track in tracks:
          dist = min(distance((self.user_lng, self.user_lat), (track.lng_s, track.lat_s)), distance((self.user_lng, self.user_lat), (track.lng_e, track.lat_e)))
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

    # # get 요청 잘못 들어왔을 때 예외처리 
    # if not kcal or not user_lng or user_lat or not togo_dist:              #  reqparser 쓰면 필요없는 코드 
    #   pass
    
    if self.kcal >= 0:
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
      
      walk_list = sorted(result, key=lambda x : abs(x.distance - self.walk_dist))
      jog_list = sorted(result, key=lambda x : abs(x.distance - self.jog_dist))
      
      return jsonify(serialization(walk_list, 4)), jsonify(serialization(jog_list, 8))
