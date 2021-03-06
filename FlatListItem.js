import {Card} from "react-native-elements";
import {Text} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, {Component} from "react";
import Axios from "axios";


export default class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }

    render() {
        const swipeSettings = {
            autoClose:true,
            right:[
                {
                    backgroundColor:"#ff4d4d",
                    text: 'Delete',
                    onPress: () => {
                        Axios.delete(
                            `${baseUrl}/api/author/` + this.props.item.id
                        ).then(this.props.refresh);
                    }
                },
                {
                    backgroundColor:"#6699ff",
                    text: 'Update',
                    onPress: () => {
                       this.props.navigation.navigate("Update",
                           {
                               authorId:this.props.item.id,
                               name:this.props.item.name,
                               email:this.props.item.email,
                               location:this.props.item.location,
                               github:this.props.item.github,
                               refresh:this.props.refresh
                           });
                    }
                },
            ],
        }

       return (
           <GestureHandlerRootView >
            <Card containerStyle={{width: "100%", margin: 0, borderBottomColor: "black", height: 130}}>
                <Card.Title>{this.props.item.name}</Card.Title>
                <Card.Divider/>
                <Text>Email:{this.props.item.email}{"\n"}Location:{this.props.item.location}{"\n"}Github:{this.props.item.github}{"\n"}</Text>
            </Card>
        </GestureHandlerRootView>
        );
    }
}