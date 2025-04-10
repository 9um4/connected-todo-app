# connected-todo-app
A simple todo app by using React and Typescript

# 환경 설정

## curl 혹은 wget 설치

### wget 설치

```bash
sudo apt get wget
```

### curl 설치

```bash
sudo apt get curl
```

## nvm 설치

[nvm repository](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)를 참고하여 설치한다.

### curl을 이용한 설치

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

### wget을 이용한 설치

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

## Typescript Template을 이용해 React 앱 생성

```bash
npx create-react-app <app-name> --template typescript
```

## (선택) `cd`를 이용해 폴더 이동

```bash
cd <app-name>
```

## 개발 서버 실행

```bash
npm start
```

성공적으로 실행할 경우 브라우저에서 자동으로 [웹사이트](http://localhost:3000)가 열린다.