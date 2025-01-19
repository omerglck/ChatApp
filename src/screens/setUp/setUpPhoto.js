import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import AppColors from '../../utils/colors';
import Camera from "../../assets/icons/Camera/Camera.svg"
import { useNavigation } from '@react-navigation/native';
import { TABMENU } from '../../utils/routes';

const SetUpPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="Add your photo" size={24} />
        <SectionDescription text="Get more people to know you better." />
      </View>

      <TouchableOpacity style={styles.body}>
          <View style={{borderWidth:1,borderColor:AppColors.Neutral.Gray,padding:50,borderRadius:100,borderStyle:"dashed"}}>
              <Camera />
          </View>
          <Text style={{marginVertical:25,color:AppColors.Brand.Black}}>Upload</Text>
      </TouchableOpacity>

      <View style={{}}>
        <Button
          title="Next"
          size="large"
          onPress={() => navigation.replace(TABMENU)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Brand.White,
    padding: 30,
    
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  body: {flex: 4, justifyContent: 'flex-start',alignItems:"center", marginTop:100},
  backHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    fontSize: 14,
    fontWeight:"500",
    color:"#D8D8D8"
  }
});

export default SetUpPhoto;
