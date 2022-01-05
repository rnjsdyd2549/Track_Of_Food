from marshmallow import Schema, fields, pre_load


class FoodInputApiSchema(Schema):
    food_name = fields.Str(required=True)


class FoodOutputApiSchema(Schema):
    id = fields.Str(required=True)
    name = fields.Str(required=True)
    carb = fields.Float(required=True)
    protein = fields.Float(required=True)
    fat = fields.Float(required=True)
    salt = fields.Float(required=True)
    kcal = fields.Float(required=True)


class TrackInputApiSchema(Schema):
    walk_dist = fields.Float(required=True)
    jog_dist = fields.Float(required=True)
    need_more_workout = fields.Float(required=True)
    user_lng = fields.Float(required=True)
    user_lat = fields.Float(required=True)

    @pre_load
    def process_input(self, data, **kwargs):
        for key, value in data.items():
            if key == 'need_more_workout':
                data[key] = int(value)
            else:
                data[key] = float(value)
        return data


class TrackOutputApiSchema(Schema):
    id = fields.Str(required=True)
    name = fields.Str(required=True)
    address = fields.Str(required=True)
    length = fields.Float(required=True)
    course = fields.Str(required=True)
    difficulty = fields.Str(required=True)
    description = fields.Str(required=True)
    img_url = fields.Str(required=True)
    coord_lng_s = fields.Float(required=True)
    coord_lat_s = fields.Float(required=True)
    coord_lng_e = fields.Float(required=True)
    coord_lat_e = fields.Float(required=True)
    coord_list = fields.Str(required=True)
