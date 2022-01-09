import React, { createContext, useState } from 'react'; // createContext를 불러온다.

//하나의 Context를 생성합니다.
const UserInfoContext = createContext({
    state: { name: '', gender: 'male', age: 0, location: '', height: 0, weight: 0, activity: 0 },
    actions: {
        setName: () => { },
        setGender: () => { },
        setAge: () => { },
        setLocation: () => { },
        setHeight: () => { },
        setWeight: () => { },
        setActivity: () => { }
    }
});

const UserInfoProvider = ({ children }) => {
    // 세션 스토리지 코드 들어가기(MDN)
    // saveToStorage 등의 함수를 생성해서 관심사를 묶어두기(함수의 호출 책임만 가진다)
    const [name, setName] = useState(''); // 유저 이름
    const [gender, setGender] = useState('male'); // 유저 성별
    const [age, setAge] = useState(0); // 유저 나이
    const [location, setLocation] = useState(''); // 유저 위치
    const [height, setHeight] = useState(0); // 유저 키
    const [weight, setWeight] = useState(0); // 유저 몸무게
    const [activity, setActivity] = useState(0); // 유저 활동량


    const value = {
        state: { name, gender, age, location, height, weight, activity },
        actions: { setName, setGender, setAge, setLocation, setHeight, setWeight, setActivity }
    };

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('age', age);
    sessionStorage.setItem('location', location);
    sessionStorage.setItem('height', height);
    sessionStorage.setItem('weight', weight);
    sessionStorage.setItem('activity', activity);


    return (
        <UserInfoContext.Provider value={value}>{children}</UserInfoContext.Provider>
    );
};

const { Consumer: UserInfoConsumer } = UserInfoContext;

export { UserInfoProvider, UserInfoConsumer };

export default UserInfoContext;