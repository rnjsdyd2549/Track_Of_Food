from flask_restful import Resource, fields, marshal_with, abort
from server.models import Track

class TrackInfo(Resource):
  resource_fields = { 
    'id'          : fields.Integer,
    'name'        : fields.String,
    'address'     : fields.String,   
    'distance'    : fields.Float,
    'time'        : fields.Float,     
    'kcal'        : fields.Float,
    'course'      : fields.Integer,
    'difficulty'  : fields.Integer,
    'intro_text'  : fields.String,
    'img_url'     : fields.String,
    'coord_x'     : fields.Float,
    'coord_y'     : fields.Float,
    'coord_list'  : fields.String
    }
  
  # 프론트에서 넘어오는게 
  # 1. 권장칼로리-섭취칼로리 : kcal
  # 2. 칼로리 태우는 데 걸리는 시간 : k_time
  # 3. 칼로리 태우기 위한 거리 : k_dist
  # 4. 사용자의 현재 위치  : loc
  
  @marshal_with(resource_fields)
  def get(self, kcal, k_time, k_dist, loc):
    if not kcal or not k_time or not k_dist or not loc:
      pass
    
    if kcal >= 0: # 사용자가 권장칼로리보다 적게 먹었으면 사용자 지역에 위치한 초급코스를 추천한다.
      track = Track.query.filter((Track.address.like(f'%{loc}%')) & (Track.difficulty == '초급코스')).limit(5).all()
      if not track:
        pass
    else:
      track = Track.query.filter(Track.address.like(f'%{loc}%')).all() 
      
      if not track:
        pass
  
    return track


'''
? 계산을 어디서 (front or end) 
? 권장칼로리-섭취칼로리가 0 혹은 양수면 초급 산책로 추천인데 120개 산책로 중 고급(4) 중급(18) 나머지 다 초급이다.
? Track에 time
? 구별로 균등히 분포가 x. 5개 추천.. 이 말이 안되네.. 거리상으로 가까운 5개 > 그중에 소모 칼로리 맞는 순.
'''