import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #404040;
`;

export const InputStyle = styled.TextInput`
    border-bottom-color: #fff;
    border-bottom-width: 1px;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    margin: 15px;
`;

export const Form = styled.View`
    align-content: space-around;
    background-color: #202020;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 130px;
    margin-bottom: 130px;
    padding: 15px;
    border-radius: 10px;
`;

export const Btn = styled.TouchableOpacity`
    background-color: #1742ff;
    margin: 15px;
    width: 130px;
    height: 60px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const TextBtn = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
`;
