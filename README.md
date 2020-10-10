# 웹프로그래밍 2조 김가네

NodeJS를 이용하여 MVC 패턴으로 작성
Model(김남훈) : 웹페이지에서 사용할 데이터베이스를 생성, 관리
View(김성용) : 웹페이지에서 보여지는 부분과 유저의 리퀘스트를 관리
Controller: 웹페이지 내부가 작동되는 부분을 작성
# 전체 디렉터리 구조

<pre>
Root_Directory
|---app 
|----|---config 
|----|---|---mysql.js 
|----|---controllers 
|----|---|---indexController.js 
|----|---|---usersController.js 
|----|---models 
|----|---routes 
|----|---|---index.js 
|----|---|---users.js 
|----|---views 
|----|---|---blank.html 
|----|---|---forgot-password.html
|----|---|---index.html
|----|---|---login.html
|----|---|---register.html
|---bin 
|----|---www 
|---data 
|---node_modules (하위 생략) 
|---public 
|----|---css (하위 생략) 
|----|---img (하위 생략) 
|----|---js (하위 생략) 
|----|---scss (하위 생략) 
|- .env 
|- app.js 
|- package.json 
|- package-lock.json
</pre>