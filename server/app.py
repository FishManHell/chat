from logging import debug
from flask import Flask, request
from flask_restful import Api, Resource, original_flask_make_response as make_response
from flask_socketio import SocketIO, Namespace, disconnect, emit, send
import base64
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['SECRET_KEY'] = '^&iuhnbTY^78ouijbvty5^&*IUbgyft6&8'
api = Api(app)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app, expose_headers='Authorization')
# установил и дописал cors а то кидало ошибку и Authorization дописал так как не мог токен достать
# поменял запрос get на post а то с get нельзя body отправлять
# поменял в классе Chatroom on_send на on_message бо происходит конфликт события ('send') и метода socket.send()

users = [
    {'username': 'Harry', 'password': '123456'},
    {'username': 'Ron', 'password': 'qwerty'},
    {'username': 'Hermione', 'password': 'asdfgh'}
]
tokenized = ["Bearer "+ base64.b64encode(":".join(i.values()).encode()).decode() for i in users]

class Login(Resource):
    def post(self):
        print(request.get_json(force=True))
        if (creds := request.get_json(force=True)) in users:
            resp = make_response({"status": "ok"}, 200)
            resp.headers['Authorization'] = "Bearer "+ base64.b64encode(":".join(creds.values()).encode()).decode()
            return resp
        else:
            resp = make_response({"status": "error"}, 401)
            return resp

class Chatroom(Namespace):
    def on_connect(self):
        if request.headers.get('Authorization') not in tokenized:
            emit('connection_error', {'error': 'unauthorized'})
            disconnect()
            return 401
        else:
            emit('success')

    def on_disconnect(self):
        print('disconnect')
        emit('disconnect')

    def on_message(self, data):
        print(data)
        emit('message', data)


socketio.on_namespace(Chatroom('/chat'))
api.add_resource(Login, '/login')

if __name__ == '__main__':
    socketio.run(app,port=5000, host='127.0.0.1', debug=True)
