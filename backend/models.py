from config import db



class Users(db.Model):
    id = db.Column(db.Integer,primary_key = True,autoincrement=True)
    name = db.Column(db.String(80), unique = True, nullable = False)
    password = db.Column(db.String(80), nullable = False)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class Tasks(db.Model):
    id = db.Column(db.Integer,primary_key = True,autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    task_status = db.Column(db.Boolean, default = False, nullable = False)
    
    task_desc = db.Column(db.String(500), nullable = False)
    timestamp = db.Column(db.DateTime, server_default=db.func.now(), nullable = False)



    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'task_desc': self.task_desc,
            'task_status': self.task_status,
            'timestamp': self.timestamp
        }
    

