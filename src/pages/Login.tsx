import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonList, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter,
  IonCard,
  IonCardContent,
  IonText
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

      <IonContent className='ion-padding'>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IonAvatar className="avatar" style={{ width: '100px', height: '100px' }}>
            <img 
              src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG" 
              alt="Avatar" 
            />
          </IonAvatar>
        </div>

        <IonCard style={{ maxWidth: '500px', margin: '20px auto' }}>
          <IonCardContent>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <IonText style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>USER</IonText>
            </div>
            
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <IonButton onClick={() => doLogin()} expand="block">
                Login
              </IonButton>  
              <IonButton onClick={() => doRegister()} expand="block" fill="outline">
                CREATE ACCOUNT
              </IonButton>  
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;