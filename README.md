# 💻 React-Native-TodoApp
### React-Native-TodoApp 저장소

<br />

## 👨🏻‍💻 기술 스텍
1. React-Native
2. Styled-Components

<br />

### 🏃 
- 

<br />

🔖 
## 👨🏻‍💻 SafeAreaView, StatusBar Component
- SafeAreaView는 아이폰11과 같은 노치 디자인때문에 가려지는 문제를 해결해 주는 컴포넌트이다.
- StatusBar는 안드로이드 Title 컴포넌트가 상태 바(Status Bar)에 가려지는 문제를 해결해주는 컴포넌트이다.
- StatusBar에서 barStyle을 통해 상태 바의 내용의 색을 수정할 수 있습니다.
- StatusBar에서 backgroundColor는 안드로이드에서만 적용되는 속성이며 상태 바의 바탕색을 수정할 수 있습니다.

```javascript
    //SageAreaView
    const Container = styled.SafeAreaView`
        (...)
    `;
```

```javascript
    //StatusBar
    import { StatusBar } from 'react-native';

    <StatusBar
        barStyle="light-content"
        backgroundColor={theme.background}
    />

```

<br />
