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
  
  @marshal_with(resource_fields)
  def get(self, t_name=None):
    if not t_name:
      pass          
  pass
