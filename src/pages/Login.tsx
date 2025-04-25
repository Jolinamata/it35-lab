import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonList,
  IonItem,
  IonPage,
  IonText,
  IonToast,
  IonHeader,
  IonToolbar,
  IonTitle,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClients';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    if (!email || !password) {
      setAlertMessage('All fields are required.');
      setShowAlert(true);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IonAvatar style={{ width: '100px', height: '100px' }}>
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
                <IonInput
                  label="Email"
                  placeholder="Enter your email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                >
                  <IonInputPasswordToggle slot="end" />
                </IonInput>
              </IonItem>
            </IonList>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <IonButton onClick={doLogin} expand="block">
                Login
              </IonButton>
              <IonButton
                onClick={() => navigation.push('/it35-lab/register', 'forward', 'replace')}
                expand="block"
                fill="outline"
              >
                Create Account
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Login Error"
          message={alertMessage}
          buttons={['OK']}
        />

        <IonToast
          isOpen={showToast}
          message="Login successful! Redirecting to the dashboard..."
          duration={2000}
          position="top"
          color="success"
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;