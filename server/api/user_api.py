from flask import jsonify
from flask_restful import Resource, abort

from typing import TYPE_CHECKING
if TYPE_CHECKING:
  from models import District

class UserInfo(Resource): 
  def get(self, d_name=None):
    if not d_name:   # 입력이 들어오지 았을 때 처리
      return ''
      
    districts = District.query.filter(District.name.like(f'{d_name}%')).all()
    
    if not districts:  # name에 해당하는 구가 없는 경우 처리 ex) 삵
      pass
    
    result = []
    for district in districts:
      result.append({'id': district.id, 'name': district.name})
  
    return jsonify(result)
    # return jsonify({ 'data' : result, 'status-code': 200}) # 이렇게 보낼까?

'''
# 메인 페이지 눌렀을 때 페이지 띄워주는 건 리액트서버에서 하나?
# '강' -> 요청오면 강남구 강동구 보여주게
# 프론트에서 글자가 올거고 그거로 이제 강 이거 포함한 지역이름 보내면 된다.
# filter_by는 사용범위가 제한적. like or 문법 사용불가. 그러나 column 명으로 만 조건 추가 가능
# 일단 filter ㄱ
'''