import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonToast,
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
      <IonContent
        fullscreen
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Overlay Layer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(102, 226, 64, 0.8), rgba(100,65,165,0.8))',
            backgroundImage: 'url(https://i.pinimg.com/originals/45/b2/e7/45b2e764d14cf9dee6dc3ed1ba0ad680.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
           
          }}
        ></div>

        {/* Login Box with Animation */}
        <div
          style={{
            zIndex: 1,
            background: 'rgba(245, 122, 51, 0.15)',
            padding: '30px 20px',
            borderRadius: '20px',
            textAlign: 'center',
            width: '100%',
            maxWidth: '350px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            position: 'relative',
            animation: 'fadeInUp 1s ease forwards', // <--- added animation
            margin: '200px auto'
          }}
        >
          {/* JOLINGS LABEL */}
          <IonText
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'black',
              fontFamily: 'Courier New, Courier, monospace',
              position: 'absolute',
              top: '10px',
              left: '20px',
            }}
          >
            JOLINGS
          </IonText>

          <IonAvatar
            style={{
              margin: '0 auto 15px',
              width: '90px',
              height: '90px',
            }}
          >
            <img
              src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG"
              alt="Avatar"
            />
          </IonAvatar>

          <IonText
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#00f0ff',
              marginBottom: '20px',
            }}
          >
            user
          </IonText>

          <IonList style={{ marginTop: '10px' }}>
            <IonItem
              style={{
                '--background': '#ff82ff',
                '--color': 'black',
                borderRadius: '10px',
                marginBottom: '10px',
              }}
            >
              <IonInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
            </IonItem>

            <IonItem
              style={{
                '--background': '#ff82ff',
                '--color': 'black',
                borderRadius: '10px',
                marginBottom: '10px',
              }}
            >
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

          <IonButton
            onClick={doLogin}
            expand="block"
            style={{
              background: '#ff82ff',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '10px',
              marginTop: '20px',
            }}
          >
            LOGIN
          </IonButton>

          <IonButton
            onClick={() => navigation.push('/it35-lab/register', 'forward', 'replace')}
            expand="block"
            fill="outline"
            style={{
              background: '#ff82ff',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '10px',
              marginTop: '10px',
            }}
          >
            CREATE ACCOUNT
          </IonButton>

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
        </div>

        {/* Animation Style */}
        <style>
          {`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

      </IonContent>
    </IonPage>
  );
};

export default Login;