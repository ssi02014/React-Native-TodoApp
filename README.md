# 💻 React-Native-TodoApp
### React-Native-TodoApp 저장소

<br />

## 👨🏻‍💻 React-native 내장 컴포넌트
🔖 https://reactnative.dev/docs/components-and-apis

### 🏃 Basic Components  
- View: UI 구축을 위한 가장 기본적인 구성 요소
- Text: 텍스트를 표시하기위한 구성 요소
- Image: 이미지를 표시하기위한 구성 요소
- TextInput: 키보드를 통해 앱에 텍스트를 입력하기 위한 구성 요소
- ScrollView: 여러 구성 요소 및 보기를 호스팅 할 수 있는 스크롤 컨테이너
- StyleSheet: CSS 스타일 시트와 유사한 추상화 계층을 제공

<br />

## 👨🏻‍💻 prop-types 라이브러리
- props를 전달 할 때, 잘못된 타입을 전달했을 때 경고 메시지를 보내주는 라이브러리

```javascript
    MyButton.propTypes = {
        //title은 string이여야 하며, 필수로 입력해야 한다.
        //onPress라는 함수가 필수적으로 입력해야 한다.
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

```

<br />
