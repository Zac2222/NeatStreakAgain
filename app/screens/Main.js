import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import AppText from "../components/AppText";
import { Swipeable, RectButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
// import { GetChoreItems } from "../services/DataService";

const Main = ({ onPress, navigation }) => {
  // const [tasks, setTasks] = useState([]);
  const [taskVisible1, setTaskVisible1] = useState(true);
  const [taskVisible2, setTaskVisible2] = useState(true);
  const [taskVisible3, setTaskVisible3] = useState(true);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const fetchedTasks = await GetChoreItems();
  //     const currentDay = new Date().getDay();
  //     const days = [
  //       "Sunday",
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Thursday",
  //       "Friday",
  //       "Saturday",
  //     ];
  //     const filteredTasks = fetchedTasks.filter(
  //       (task) => task.day === days[currentDay]
  //     );
  //     setTasks(filteredTasks);
  //   };

  //   fetchTasks();
  // }, []);

  const handleTaskCompletion = (taskSetter) => {
    taskSetter(false);
  };

  const renderRightActions = (taskSetter) => {
    return (
      <RectButton
        style={styles.swipe}
        onPress={() => handleTaskCompletion(taskSetter)}
      >
        <AntDesign name="check" size={50} color="green" />
        <Text style={{ color: "green" }}>Done</Text>
      </RectButton>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={defaultStyles.options}>
          <TouchableOpacity
            style={{ color: colors.dark }}
            onPress={() => navigation.navigate("Records")}
          >
            <AppText style={{ color: colors.dark }}>Records</AppText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={defaultStyles.options}
          onPress={() => navigation.navigate("Setup")}
        >
          <AppText style={{ color: colors.dark }}>Task SetUp</AppText>
        </TouchableOpacity>
      </View>

      {taskVisible1 && (
        <Swipeable
          renderRightActions={() => renderRightActions(setTaskVisible1)}
        >
          <TouchableOpacity onPress={onPress}>
            <View style={defaultStyles.task}>
              <AppText>Take out Trash</AppText>
            </View>
          </TouchableOpacity>
        </Swipeable>
      )}

      {taskVisible2 && (
        <Swipeable
          renderRightActions={() => renderRightActions(setTaskVisible2)}
        >
          <TouchableOpacity onPress={onPress}>
            <View style={defaultStyles.task}>
              <AppText>Clean Room</AppText>
            </View>
          </TouchableOpacity>
        </Swipeable>
      )}

      {taskVisible3 && (
        <Swipeable
          renderRightActions={() => renderRightActions(setTaskVisible3)}
        >
          <TouchableOpacity onPress={onPress}>
            <View style={defaultStyles.task}>
              <AppText>Wash Dishes</AppText>
            </View>
          </TouchableOpacity>
        </Swipeable>
      )}

      <View style={defaultStyles.streak}>
        <AppText style={defaultStyles.streakText}>12</AppText>
      </View>
      <AppText style={{ color: colors.dark }}>Days in a row</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  swipe: {
    backgroundColor: colors.secondary,
    width: 100,
    height: 100,
    margin: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;
