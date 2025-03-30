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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
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
      
      <IonContent className="ion-padding">
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IonCard  color="success" style={{ maxWidth: '500px', width: '100%' }}>
            <IonCardHeader>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                <IonAvatar className="avatar" style={{ width: '100px', height: '100px' }}>
                  <img src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG" alt="Avatar" />
                </IonAvatar>
              </div>
              <IonCardTitle style={{ textAlign: 'center' }}>USER</IonCardTitle>
              <IonCardSubtitle style={{ textAlign: 'center' }}>Please login to continue</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonInput label="Username" placeholder="Enter your username"></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput 
                    type="password" 
                    label="Password" 
                    placeholder="Enter your password"
                  >
                    <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                  </IonInput>
                </IonItem>
              </IonList>

              <div style={{ marginTop: '20px' }}>
                <IonButton onClick={() => doLogin()} expand="block">
                  Login
                </IonButton>  
                <IonButton 
                  onClick={() => doRegister()} 
                  expand="block" 
                  fill="outline"
                  style={{ marginTop: '10px' }}
                >
                  CREATE ACCOUNT
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;