import { 
  IonAvatar,
  IonButton,
  IonButtons,
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonInput, 
    IonInputPasswordToggle, 
    IonItem, 
    IonList, 
    IonMenuButton, 
    IonPage, 
    IonText, 
    IonTitle, 
    IonToolbar, 
    useIonRouter
} from '@ionic/react';


const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
      navigation.push('/it35-lab/app','forward','replace');
  }
  const doRegister = () => {
    navigation.push('/it35-lab/register', 'forward', 'replace');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <style>
       
      </style>

      <div>  <IonAvatar className="avatar">
                        <img src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG" alt="Avatar" />
                    </IonAvatar></div>
     <div>
     <IonList>
      <IonItem>
        <IonInput label="user name" placeholder=""></IonInput>
      </IonItem>
        <br></br>
        <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>
      </IonList></div>
      
      <IonContent className='ion-padding'>
      <IonButton onClick={() => doLogin()} expand="full">
              Login
          </IonButton>  
          <IonButton onClick={() => doRegister()} expand="full">
              CREATE ACCOUNT
          </IonButton>  
      </IonContent>
    </IonPage>
  );
};

export default Login;