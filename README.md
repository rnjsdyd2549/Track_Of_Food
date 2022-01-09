# 서비스명 : 트랙오브푸드

- 먹은 배달음식 기반 산책로 추천 서비스


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
#### /client
- CRA를 통한 리액트 폴더들
- dockerfile
- nginx config file

#### /data
- 데이터 분석 관련 파일

#### /server
- `app.py         # 메인 flask app`
- `load_data.py   # food.csv , track.csv 로부터 데이터를 읽어서 mysql에 저장`
- `api.py         # api 리소스`
- `api_schema.py  # marshamllow를 통한 입출력 데이터 검증과 포맷팅`
- `models.py      # flask-sqlalchemy db models`
- `config.py      # flask app config`

## 1. 프로젝트 소개

**어떠한 인공지능 모델과 알고리즘을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**

  - 
  - 웹 기술스택 : react + nginx + gunicorn + flask + docker + mysql
  - 데이터분석 기술스택 : colab + tableau
  - 사용된 라이브러리 : material-UI, flask-restful, flask-cors, flask-sqlalchemy, marshmallow, pymysql, cryptography, geopy 
  - 코로나 시대 배달음식 섭취 증가, 운동 부족으로 인한 건강문제를 해결하기 위해 배달음식을 입력하면 해당 배달음식을 통해 섭취한 칼로리를 소비하기 적합한 산책로를 추천해주는 서비스

## 2. 프로젝트 목표

**웹서비스의 해결 과제와 데이터분석으로 해결하기 위한 방안 논의 (50자 이상)**
  - 프로젝트 아이디어 동기
  - 문제를 해결하기 위한 특정 질문 명시
  - 데이터분석을 통해 해결하려는 문제를 구체적으로 작성

## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  - 주요 기능 (주된 활용성) 및 서브 기능
  - 프로젝트만의 차별점, 기대 효과

## 4. 프로젝트 구성도
  - 와이어프레임/스토리보드 추가

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
- 개발 단계: 와이어프레임을 기반으로 구현, 인공지능 학습 결과 시각화 담당, UI 디자인 완성
- 수정 단계: 코치님 피드백 반영해서 프론트 디자인 수정

3. 백엔드

- 기획 단계: 데이터셋을 확보하기 위한 데이터베이스 구축, 데이터셋 수집
- 개발 단계: 데이터 베이스 구축 및 API 활용, 웹서비스 사용자의 정보 수집 기능 구현, 인공지능 학습 결과를 활용한 기능 구현
- 수정 단계: 코치님 피드백 반영해서 백엔드 설계/기능 수정

4. 데이터분석

- 기획 단계: 웹 서비스 프로젝트 주제에 맞는 모델 및 알고리즘 설정, 모델과 알고리즘에 적합한 데이터셋 수집
- 개발 단계: 데이터 전처리, 학습 모델 구현, 학습 데이터 가공 및 모델 정밀도 향상
- 수정 단계: 코치님 피드백 반영해서 인공지능 학습 방식 수정


## 6. 버전
  - 프로젝트의 버전 기입

## 7. FAQ
  - 자주 받는 질문 정리
