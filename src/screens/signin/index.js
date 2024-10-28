import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Buttons from '../../../components/buttons/Buttons';
import Splash from '../splash/index'
// import FullRoundButton from '../../../components/buttons/fullRoundedButton';
// import Fb from '../../assets/fb.png';
import FbIcon from 'react-native-vector-icons/FontAwesome5';
import Password from '../../../components/password';
// import SignUp from '../SignUp';
import SideDrawer from '../../../components/Sidebar/drawer'


const Signin = ({navigation}) => {
  return (
    <View style={styles.top}>
      <StatusBar style={styles.statusBar} />
      <View style={styles.image}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1805.jpg?size=626&ext=jpg&ga=GA1.1.1060511683.1728674456&semt=ais_hybrid-rr-similar',
          }}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.heading}>Hello !</Text>
        <Text style={styles.heading2}>Welcome to Our Ecommerce App</Text>
        {/* <Text style={styles.heading3}>Sign in to unlock a seamless shopping experience tailored just for you.</Text> */}
        {/* <View style={styles.button}> */}
        <Buttons onPress={()=>navigation.navigate("Splash")}  label={'login'} />
        <Buttons onPress={()=>navigation.navigate("SignUp")} border={true} label={'Sign Up'} />

        <Text style={{color: '#F88379', alignSelf: 'center',marginTop:50}}>
          Or sign via social media account!
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 5,
          }}>
          <TouchableOpacity style={styles.icon}>
            <View
              style={{
                backgroundColor: 'blue',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
              }}>
              <FbIcon name="facebook" color={'white'} size={30} />
            </View>
            
           <View  style={{
                backgroundColor: 'coral',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
              }}><FbIcon name="google" color={'white'} size={30} /></View> 

          </TouchableOpacity>

          {/* <FullRoundButton/>
        <FullRoundButton/> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  image: {
    flex: 0.4,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    flex: 0.6,
    // backgroundColor: '#dfeffe',
    backgroundColor:'white',
    paddingHorizontal: 20,
    paddingTop:20
  },
  statusBar: {
    backgroundColor: '#black',
  },
  heading: {
    fontSize: 44,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  heading2: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    marginVertical: 10,
    alignSelf: 'center',
  },
  heading3: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  // button:{
  //     flex:1,
  //     flexDirection:'row',

  // },
  icon: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'space-evenly',
    marginTop: 9,
    
  },
});
export default Signin;
