import React from "react";
import {
    Container,
    UserIcon,
    Header,
    InfoText,
    FeedText,
    ImgPost,
    Postagem,
    TextPost,
    StorieItem
} from "./styled";
import UserIconImg from "../../../assets/user.png";
import { ScrollView } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { About, Profile } from "../container/container";
import Icon from "react-native-vector-icons/FontAwesome5";

export class PageData extends React.Component {
    static navigationOptions = {
        header: null
    };

    render = () => (
        <Container>
            <Header>
                <UserIcon source={UserIconImg} />
                <InfoText>
                    {this.props.navigation.state.params.name}
                    {"\n"}
                    {this.props.navigation.state.params.email}
                </InfoText>
            </Header>

            <ScrollView>
                <FeedText>Stories </FeedText>
                <ScrollView horizontal="true">
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                    <StorieItem></StorieItem>
                </ScrollView>

                <FeedText>Your Feed </FeedText>

                <Postagem>
                    <TextPost>Postagem</TextPost>
                    <ImgPost></ImgPost>
                </Postagem>

                <Postagem>
                    <TextPost>Postagem</TextPost>
                    <ImgPost></ImgPost>
                </Postagem>

                <Postagem>
                    <TextPost>Postagem</TextPost>
                    <ImgPost></ImgPost>
                </Postagem>

                <Postagem>
                    <TextPost>Postagem</TextPost>
                    <ImgPost></ImgPost>
                </Postagem>

                <Postagem>
                    <TextPost>Postagem</TextPost>
                    <ImgPost></ImgPost>
                </Postagem>
            </ScrollView>
        </Container>
    );
}

export default createBottomTabNavigator(
    {
        Home: {
            screen: PageData,
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => {
                    if (focused) {
                        tintColor = "#298099";
                    }
                    return <Icon name="home" size={24} color={tintColor} />;
                }
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => {
                    if (focused) {
                        tintColor = "#298099";
                    }
                    return <Icon name="user" size={24} color={tintColor} />;
                }
            }
        },
        About: {
            screen: About,
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => {
                    if (focused) {
                        tintColor = "#298099";
                    }
                    return <Icon name="question" size={24} color={tintColor} />;
                }
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            style: {
                backgroundColor: "#404040"
            },
            showLabel: false
        }
    }
);
