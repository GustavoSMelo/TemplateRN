import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #404040;
`;

export const UserIcon = styled.Image`
    border-radius: 30px;
    border-color: #1742ff;
    border-width: 3px;
    width: 60px;
    height: 60px;
`;

export const Header = styled.View`
    padding: 35px;
    flex-direction: row;
`;

export const InfoText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`;

export const FeedText = styled.Text`
    color: #9c9895;
    font-size: 26px;
    font-weight: bold;
    margin: 23px;
`;

export const Postagem = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ImgPost = styled.View`
    width: 300px;
    height: 275px;
    background-color: #fff;
    margin: 30px;
    border-radius: 15px;
`;

export const TextPost = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    padding: 5px;
`;

export const StorieItem = styled.View`
    border-radius: 50px;
    border-width: 3px;
    border-color: #1742ff;
    background-color: #fff;
    margin: 7px;
    width: 80px;
    height: 80px;
`;
