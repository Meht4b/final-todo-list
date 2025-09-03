from flask import request, jsonify,session
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from config import app, db,jwt
from models import Users, Tasks
import os
import bcrypt



@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.get_json()
    name = data.get('name')
    password = data.get('password')

    if not name or not password:
        return jsonify({"error": "Name and password are required"}), 400

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    try:

        new_user = Users(name=name, password=hashed_password.decode('utf-8'))
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User added successfully", "user": new_user.to_json()}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/get_users', methods=['GET'])
def get_users():
    try:
        users = Users.query.all()
        json_users = list(map(lambda x: x.to_json(), users))

        return jsonify({"users": json_users})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/check_password', methods=['POST'])
def check_password():
    data = request.get_json()
    name = data.get('name')
    password = data.get('password')

    if not name or not password:
        return jsonify({"error": "Name and password are required"}), 400

    user = Users.query.filter_by(name=name).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        return jsonify({"message": "Password is correct", "access_token": create_access_token(identity=str(user.id),additional_claims={"name": user.name})
}), 200
    else:
        return jsonify({"error": "Incorrect password"}), 401

@app.route('/create_task', methods=['POST'])
@jwt_required()
def create_task():
    data = request.get_json()

    task_desc = data.get('task_desc')
    task_status = data.get('task_status')
    timestamp = data.get('timestamp')
    user_id = int(get_jwt_identity())
    if not task_desc:
        return jsonify({"error": "Task description is required"}), 400
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400
    try:
        new_task = Tasks(user_id=user_id, task_desc=task_desc,task_status=task_status,timestamp=timestamp)
        db.session.add(new_task)
        db.session.commit()

        return jsonify({"message": "Task created successfully", "task": new_task.to_json()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/update_task', methods=['PATCH'])
@jwt_required()
def update_task():
    data = request.get_json()

    task_id = data.get('task_id')
    task_desc = data.get('task_desc')
    task_status = data.get('task_status')
    user_id = int(get_jwt_identity())
    if not task_id:
        return jsonify({"error": "Task ID is required"}), 400
    if not task_desc:
        return jsonify({"error": "Task description is required"}), 400
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400
    task = Tasks.query.get(task_id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    if task.user_id != user_id:
        return jsonify({"error": "You are not authorized to update this task"}), 403
    try:
        task.task_desc = task_desc
        task.task_status = task_status
        db.session.commit()

        return jsonify({"message": "Task updated successfully", "task": task.to_json()}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/get_tasks', methods=['GET'])
@jwt_required()
def get_tasks():

    user_id = int(get_jwt_identity())
    tasks = Tasks.query.filter(Tasks.user_id == user_id).all()
    json_tasks = list(map(lambda x: x.to_json(),tasks))
    return jsonify({"tasks" : json_tasks})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0',port=5000)