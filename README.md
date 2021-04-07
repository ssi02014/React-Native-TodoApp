# 💻 React-Native-TodoApp
### React-Native-TodoApp 저장소

<br />

## 👨🏻‍💻 기술 스텍
1. React-Native
2. Styled-Components

<br />
 
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

## 👨🏻‍💻 Dimensions, useWindowDimensions
- Dimensions, useWindowDimensions 모두 현재 기기의 화면 크기를 알 수 있고, 이를 이용해 다양한 크기의 기기에 동일한 모습으로 적용될 수 있도록 코드를 작성할 수 있다.
- Dimensions는 처음 값을 받아왔을 때의 크기로 고정되기 때문에 기기를 회전해서 화면이 전환되면 변화된 화면의 크기가 일치하지 않는 문제가 있다.
- useWindowDimensions는 리액트 네이티브에서 제공하는 Hooks중 하나로, 화면의 크기가 변경되면 화면의 크기, 너비 ,높이를 자동으로 업데이트한다.

![1](https://user-images.githubusercontent.com/64779472/113824104-5888be80-97ba-11eb-88dc-2b4f1c41bd9f.PNG)

```javascript
    //Dimensions
    import { Dimensions } from 'react-native';

    const Input = () => {
        const width = Dimensions.get('window').width;

        return <StyledInput width={width} />
    }
```

```javascript
    //useWindowDimensions
    import { useWindowDimensions } from 'react-native';

    const Input = () => {
        const width = useWindowDimensions().width;

        return <StyledInput width={width} />
    }
```

<br />

## 👨🏻‍💻 TextInput 속성
- autoCapitalize: 자동으로 대문자 전환(iOS)
- autoCorrect: 자동 수정 기능(iOS)
- returnKeyType: 키보드의 완료 버튼 설정(iOS)
- keyboardApperance: 키보드 색 설정(iOS)

```javascript
    <StyledInput 
        width={width} 
        placeholder={placeholder} 
        maxLength={50}
        autoCapitalize='none' //자동 대문자 변환 동작X
        autoCorrect={false} //자동 수정 기능 동작X
        returnKeyType='done' //키보드의 완료 버튼 'done'
        keyboardApperance='dark' //키보드의 색
    />
```
<br />

## 👨🏻‍💻 Google Material Design
🔖 https://material.io/resources/icons/?style=baseline

![2](https://user-images.githubusercontent.com/64779472/113828270-2b8ada80-97bf-11eb-8341-724f9b55296f.PNG)

- 프로젝트에 사용할 아이콘 이미지를 다운받을 수 있습니다.
- iOS로 다운받으면 x2, x3 사이지의 아이콘이 함께 있습니다.
- 파일명을 동일한 이름을 사용하면서 @2x, @3x를 붙이면 리액트 네이티브에서 화면 사이즈에 알맞은 크기의 이미지를 자동으로 불러와 사용할 수 있습니다.

<br />

## 👨🏻‍💻 Image Component
- Image Component는 리액트 네이티브에서 제공하는 컴포넌트이며, 프로젝트에 있는 이미지 파일의 경로나 URL을 이용하여 원격에 있는 이미지를 렌더링할 수 있습니다.
-

```javascript
```

<br />

### 🏃 
- 

<br />