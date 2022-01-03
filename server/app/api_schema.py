from marshmallow import Schema, fields


class FoodInputApiSchema(Schema):
    food_name = fields.Str(required=True)


class FoodOutputApiSchema(Schema):
    id = fields.Str()
    name = fields.Str()
    carb = fields.Float()
    protein = fields.Float()
    fat = fields.Float()
    salt = fields.Float()
    kcal = fields.Float()


class TrackInputApiSchema(Schema):
    togo_dist = fields.Float()
    kcal = fields.Float()
    user_lng = fields.Float()
    user_lat = fields.Float()


class TrackOutputApiSchema(Schema):
    id = fields.Str()
    name = fields.Str()
    address = fields.Str()
    length = fields.Float()
    course = fields.Str()
    difficulty = fields.Str()
    description = fields.Str()
    img_url = fields.Str()
    coord_lng_s = fields.Float()
    coord_lat_s = fields.Float()
    coord_lng_e = fields.Float()
    coord_lat_e = fields.Float()
    coord_list = fields.Str()
