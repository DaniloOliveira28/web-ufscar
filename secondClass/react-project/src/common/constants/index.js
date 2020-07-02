// export const DATABASE_CONFIG = {
//   apiKey: 'AIzaSyDy45Pr-IEaVi_F_WuQdAwGkHTxDA7Xkzc',
//   authDomain: 'testmyhome-af24f.firebaseapp.com',
//   databaseURL: 'https://testmyhome-af24f.firebaseio.com',
//   storageBucket: 'gs://testmyhome-af24f.appspot.com'
// };
export const DATABASE_CONFIG  = {
  apiKey: process.env.REACT_APP_APIKEY, 
  authDomain: process.env.REACT_APP_AUTHDOMAIN, 
  databaseURL: process.env.REACT_APP_DATABASEURL, 
  projectId: process.env.REACT_APP_PROJECTID, 
  storageBucket: process.env.REACT_APP_STORAGEBUCKET, 
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID, 
  appId: process.env.REACT_APP_APPID, 
};