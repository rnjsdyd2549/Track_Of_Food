# 서비스명 : 트랙오브푸드(Track-of-Food)

- 사용자의 정보에 따라 도출한 권장 칼로리 및 영양정보와 비교하여 배달 음식으로 얻은 칼로리를 소비하기 위한 위치 기반 서울시 내 산책로 추천 서비스


## 프로젝트 실행/배포 안내

1. 프로젝트 디렉토리 복사<br>
`$ git clone {repository url}`
2. docker 설치
3. team10/(프로젝트 루트 디렉토리)에서<br>
`$ docker-compose up`
4. team10/server 디렉토리에서<br>
`$ pip install -r requirements.txt`<br>
`$ python3 load_data.py`
5. 브라우저에서 localhost(:80 입력하지 않으면 기본포트)로 접속
6. 가상머신에 배포 하는경우 도메인 설정 후 도메인으로 바로 접속

```bash
team10/client/ $ npm start  # 로컬에서 리액트 앱만 실행
team10/server/ $ gunicorn -b 0.0.0.0:5000 app:app  # 로컬에서 서버만 실행

# 또는 각 디렉토리의 dockerfile로 docker image를 빌드해서 run 해도 가능
```

## 프로젝트 폴더구조 안내
```
$ Track-of-Food
.
├── .gitlab
├── client
│   ├── node_modules
│   ├── public
│   ├── src
│   │   └── components
│   │   │   └── Landing
│   │   │   └── Header
│   │   │   └── Footer
│   │   │   └── Food
│   │   │   └── Trail
│   │   │   └── themes
│   │   │   └── App.js
│   │   │   └── index.js
│   │   └── pages
│   │   └── store
│   │   └── utiles
│   │   └── .env
│   │   └── cofig.js
│   │   └── index.js
│   │   └── logo.svg
│   ├── .env
│   ├── .gitignore
│   ├── Dockerfile
│   ├── nginx.default.conf
│   ├── package-lock.json
│   ├── package.json
│   └── README
├── data
│   ├── district.csv
│   └── example.csv
├── server
│   ├── api_schema.py
│   ├── api.py
│   ├── app.py
│   ├── config.py
│   ├── load_data.py
│   ├── models.py
│   ├── Dockerfile
│   ├── food.csv
│   ├── track.csv
│   └── requirements.txt
├── docker-compose.yml
└── README.md
```
#### /client
- `/node_modules`
> React 프로젝트의 라이브러리가 저장되어 있음
- `/public`
> 브라우저상에 보이는 html파일과 이미지들이 저장되어 있음
- `/src`
> React 소스 파일
- `dockerfile`
> react + nginx 구동 docker container를 위한 dockerfile
- `nginx.default.conf`
> react + nginx docker container에서 사용되는 config file


#### /data
- 데이터 분석 관련 파일

#### /server
- `app.py`         
>  메인 flask app
- `load_data.py`   
>  food.csv , track.csv 로부터 데이터를 읽어서 mysql에 저장
- `api.py`         
>  api 리소스
- `api_schema.py`  
>  marshamllow를 통한 입출력 데이터 검증과 포맷팅
- `models.py`      
>  flask-sqlalchemy db models
- `config.py`      
>  flask app config

## 1. 프로젝트 소개

**어떠한 인공지능 모델과 알고리즘을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**

  - 웹 기술스택 : `react + nginx + gunicorn + flask + docker + mysql`
  - 데이터분석 기술스택 : `colab + tableau`
  - 사용된 라이브러리 : `material-UI, axios, flask-restful, flask-cors, flask-sqlalchemy, marshmallow, pymysql, cryptography, geopy` 
  - 코로나 시대 배달음식 섭취 증가, 운동 부족으로 인한 건강문제를 해결하기 위해 배달음식을 입력하면 해당 배달음식을 통해 섭취한 칼로리를 사용자의 권장 칼로리와 비교하여 잉여 칼로리를 소비하기 적합한 산책로를 추천해주는 서비스

## 2. 프로젝트 목표

**웹서비스의 해결 과제와 데이터분석으로 해결하기 위한 방안 논의 (50자 이상)**
  - 프로젝트 아이디어 동기 <br>
    : 코로나 전후의 배달 데이터 분석 결과, 코로나 확진자가 증가할 수록 배달 주문량이 증가하였다. <br>
      배달 주문량의 증가는 즉, 사람들의 배달 음식 섭취가 증가하였다는 뜻이며, 이에 초점을 맞추어 사람들의 비만율을 조사해본 결과 <br>
      코로나가 본격적으로 시작된 2020년 3월부터 사람들의 외부 활동량이 줄고 비만율이 높아진 것을 알 수 있었다. <br>
      이에 우리는 배달 음식과 떨어진 외부 활동에 의해 과섭취하게 되는 칼로리만큼을 태우기 위한 사용자 근처의 산책로를 추천하는 서비스를 기획하게 되었다.<br> <br>
  - 문제를 해결하기 위한 특정 질문 명시
  - 데이터분석을 통해 해결하려는 문제를 구체적으로 작성

## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  - 배달음식을 선택하면 섭취한 칼로리를 확인할 수 있고, 권장칼로리와의 비교도 가능하다. 
  - 또한 위의 정보를 통해서 적합한 산책로를 추천받아 건강을 유지하는데에 도움을 준다. 

## 4. 프로젝트 구성도
  - 와이어프레임/스토리보드 추가
    - Web.ver 스토리보드 : https://ovenapp.io/project/nDR8LXuOBxzM97OCA17aqdh2ikziKPCF#KfZqC
    - Mobile.ver 스토리보드 : https://ovenapp.io/project/W1SSHGyrohJqNe8WkTKkJ3A5M4Y7QmUc#bOwtA

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 박서린 | 팀장/프론트엔드 개발 |
| 김인기 | 백엔드 개발 |
| 강주성 | 백엔드 개발 |
| 권용찬 | 데이터 분석 |
| 김지하 | 데이터 분석 |

**멤버별 responsibility**

1. 팀장

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 or 인공지능 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터분석 결과 시각화 담당, UI 디자인 완성
- 수정 단계: 코치님 피드백 반영해서 프론트 디자인 수정

3. 백엔드

- 기획 단계: 데이터셋을 확보하기 위한 데이터베이스 구축, 데이터셋 수집
- 개발 단계: 데이터 베이스 구축 및 API 활용, 웹서비스 기능 구현
- 수정 단계: 코치님 피드백 반영해서 백엔드 설계/기능 수정

4. 데이터분석

- 기획 단계: 웹 서비스 프로젝트에 필요한 데이터분석 결과들을 상정, 데이터셋 수집
- 개발 단계: 데이터 전처리, 데이터분석 결과 시각화
- 수정 단계: 코치님 피드백 반영해서 수정


## 6. 버전
  - 1.0.0

## 7. FAQ
  - 자주 받는 질문 정리
