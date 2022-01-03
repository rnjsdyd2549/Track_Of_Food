from flask import jsonify
from flask_restful import Resource, abort

from typing import TYPE_CHECKING
if TYPE_CHECKING:
  from models import Food


class FoodInfo(Resource):
  def get(self, f_name=None):
    if not f_name:  # 입력이 들어오지 았을 때 처리
      return ''
    
    foods = Food.query.filter(Food.name.like(f'%{f_name}%')).all()
    
    if not foods:    # name에 해당하는 음식이 없는 경우 처리  ex) 삵
      pass
    
    result = []
    for food in foods:
      result.append({
        'id' : food.id,
        'name' : food.name,
        'carb' : food.carb,
        'protein' : food.protein,
        'fat' : food.fat,
        'salt' : food.salt,
        'kcal' : food.kcal
      })

    return jsonify(result)


'''
# 음식 검색 -> 냉 -> 냉족발에 맞는 db데이터 꺼내서 return 하면 됨.
'''
