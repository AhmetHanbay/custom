import React from "react";
import { SafeAreaView,StyleSheet,ScrollView } from "react-native";
import Card from "./components/Card";

function App() {
    return (
     <SafeAreaView>
        <ScrollView>
            <Card tittle="Ahmet" text="Geliyor"/>
            <Card tittle="Fevzi" text="Geliyor"/>
            <Card tittle="Hanbay" text="Geliyor"/>
        </ScrollView>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
    },
  });
  
  export default App;