from flask_restful import Resource, fields, marshal_with, abort
from server.models import Food

class FoodInfo(Resource):
  resource_fields = { 
    'id'      : fields.Integer,
    'name'    : fields.String,
    'carb'    : fields.Float,
    'protein' : fields.Float,
    'fat'     : fields.Float,
    'sugar'   : fields.Float,
    'salt'    : fields.Float,
    'kcal'    : fields.Float,
    }
  
  @marshal_with(resource_fields)
  def get(self, f_name=None):
    if not f_name:  # 입력이 들어오지 았을 때 처리
      pass
    
    food = Food.query.filter(Food.name.like(f'{f_name}%')).all()
    
    if not food:    # name에 해당하는 음식이 없는 경우 처리  ex) 삵
      pass
    
    return food


'''
# 음식 검색 -> 냉 -> 냉족발에 맞는 db데이터 꺼내서 return 하면 됨.
'''
