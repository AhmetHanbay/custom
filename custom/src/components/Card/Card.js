import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./Card.style";


const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.tittle}>{props.tittle}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => Alert.alert("Merhaba " + props.tittle)}>
                <Text style={styles.button_title}>I LIKED</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Card;