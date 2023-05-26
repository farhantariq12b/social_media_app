import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";
import { colors } from "../../utils/colors";
import { UsersData } from "../../utils/UsersData";
import { UserContext } from "../../utils/AppContext";
import { SIZES } from "../../constants/sizes";

const AddPost = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [image, setImage] = useState(null);

  const { usersData, setUsersData } = useContext(UserContext);
  const showToast = () => {
    ToastAndroid.show("Post added Successfully", ToastAndroid.SHORT);
  };

  const handleImageUpload = async () => {
    // Request permission to access the camera roll
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access the camera roll is required!");
      return;
    }

    // Launch image picker
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!pickerResult.cancel) {
      setImage(pickerResult.assets[0].uri);
    }

    if (!pickerResult.cancel) {
      setImage(pickerResult.assets[0].uri);

      return pickerResult.assets[0].uri;
    } else {
      setImage(null);
      return "";
    }
  };

  const onSubmit = (data) => {
    setUsersData([
      ...usersData,
      usersData[0].posts.push({
        postImage: data.image,
        description: data.description,
        likes: 0,
        comments: [],
        id: usersData[0].posts.length + 1,
      }),
    ]);
    showToast();
    reset();
    setImage("");
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange } }) =>
          image ? (
            <TouchableOpacity
              onPress={async () => {
                const imageValue = await handleImageUpload();
                onChange(imageValue);
              }}
              style={styles.imageBox}
            >
              <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.editButton}
              onPress={async () => {
                const imageValue = await handleImageUpload();
                onChange(imageValue);
              }}
            >
              <Text style={styles.button}>Add Image</Text>
            </TouchableOpacity>
          )
        }
        name="image"
        rules={{ required: "Image is required" }}
        defaultValue=""
      />
      {errors.image && <Text style={styles.error}>{errors.image.message}</Text>}

      <Text style={styles.label}>Description:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Enter description"
          />
        )}
        name="description"
        rules={{ required: "Description is required" }}
        defaultValue=""
      />
      {errors.description && (
        <Text style={styles.error}>{errors.description.message}</Text>
      )}

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.applyBtnText}>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    gap: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  error: {
    color: "red",
    marginBottom: 5,
  },

  editButton: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: `${colors.darkGrey2}`,
    width: "50%",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    marginLeft: 75,
  },
  button: {
    color: `${colors.darkGrey}`,
  },
  applyBtn: {
    backgroundColor: colors.orange,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
    marginTop: 30,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: colors.secondary,
  },
});

export default AddPost;
