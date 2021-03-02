from flask import Flask
from flask import request
from flaskext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Shubham@1994'
app.config['MYSQL_DATABASE_DB'] = 'bookInventory'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
conn = mysql.connect()
cursor =conn.cursor()

# 
# home routes
# 
@app.route("/api/v1/createUser")
def createUser():
    userName = request.args.get('userName')
    email = request.args.get('email')
    password = request.args.get('password')
    cursor.execute("INSERT INTO user (userName , email , password ) VALUES (%s, %s, %s)", (userName, email, password))
    conn.commit()
    return {"data":"susscessfully"}

@app.route("/api/v1/login")
def category():
    user = request.args.get('user')
    password = request.args.get('password')
    cursor.execute("select * from user where userName = %s AND password = %s",(user, password))
    data = cursor.fetchall()
    return {"data":data}

@app.route("/api/v1/getAccount")
def getAccount():
    user = request.args.get('user')
    cursor.execute("select * from outBook where userName = %s",(user))
    data = cursor.fetchall()
    return {"data":data}

@app.route("/api/v1/inventoryIn", methods=['GET'])
def inventoryIn():
    name = request.args.get('name')
    des = request.args.get('des')
    category = request.args.get('category')
    date = request.args.get('date')
    cursor.execute("INSERT INTO books (bookName, description, category, inventoryIn) VALUES (%s, %s, %s, %s)", (name, des, category, date))
    conn.commit()
    return {"data":"susscessfully"}

@app.route("/api/v1/inventoryOut", methods=['GET'])
def inventoryOut():
    name = request.args.get('search')
    print(name)
    cursor.execute("select * from books where category = %s",(name))
    data = cursor.fetchall()
    return {"data":data}

@app.route("/api/v1/takenOut", methods=['GET'])
def takenOut():
    name = request.args.get('name')
    userName = request.args.get('userName')
    inDate = request.args.get('inDate')
    outDate = request.args.get('outDate')
    cursor.execute("INSERT INTO outBook (bookName, userName , inventoryIn , inventoryOut ) VALUES (%s, %s, %s, %s)", (name, userName, inDate, outDate))
    conn.commit()
    return {"data":"susscessfully"}

if __name__ == '__main__':
    app.run(debug=True)