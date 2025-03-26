import {
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  useIonRouter,
  useIonAlert,
  IonCard,
  IonCardContent
} from '@ionic/react';
import { useState } from 'react';

const Register: React.FC = () => {
  const router = useIonRouter();
  const [presentAlert] = useIonAlert();
  const [email, setEmail] = useState('');

  const validateEmail = (email: string) => {
    return email.endsWith('@nbsc.edu.ph');
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
      presentAlert({
        header: 'Invalid Email',
        message: 'Please use an official NBSC email (@nbsc.edu.ph)',
        buttons: ['OK']
      });
      return;
    }
    console.log('Registration successful!');
    router.push('/it35-lab', 'forward', 'replace');
  };

  const doLogin = () => {
    router.push('/it35-lab', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: 'center' }}>Register Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
    
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '80vh'
        }}>
          <IonCard style={{ 
            width: '100%', 
            maxWidth: '500px',
            borderRadius: '15px',
            boxShadow: '0 4px 16px rgba(28, 205, 236, 0.1)'
          }}>
            <IonCardContent>
              <h2 style={{ 
                textAlign: 'center', 
                marginBottom: '20px',
                color: 'var(--ion-color-primary)'
              }}>
                Sign Up
              </h2>
              
              <IonList>
                <IonItem>
                  <IonInput 
                    label="First Name" 
                    labelPlacement="stacked" 
                    placeholder="Enter First Name"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput 
                    label="Last Name" 
                    labelPlacement="stacked" 
                    placeholder="Enter Last Name"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput 
                    label="Username" 
                    labelPlacement="stacked" 
                    placeholder="Enter username"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput 
                    label="Address" 
                    labelPlacement="stacked" 
                    placeholder="Enter address"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput 
                    label="Email" 
                    labelPlacement="stacked" 
                    placeholder="Enter email@nbsc.edu.ph"
                    type="email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput 
                    label="Password" 
                    labelPlacement="stacked" 
                    placeholder="Enter password" 
                    type="password"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput 
                    label="Confirm Password" 
                    labelPlacement="stacked" 
                    placeholder="Confirm password" 
                    type="password"
                  ></IonInput>
                </IonItem>
              </IonList>

              <IonButton 
                onClick={handleRegister} 
                expand="block" 
                color="primary" 
                style={{ marginTop: '20px' }}
              >
                REGISTER
              </IonButton>

              <IonButton 
                onClick={doLogin} 
                expand="block" 
                fill="outline" 
                color="medium" 
                style={{ marginTop: '10px' }}
              >
                GO TO LOGIN
              </IonButton>

              <p style={{ 
                textAlign: 'center', 
                marginTop: '20px',
                color: 'var(--ion-color-medium)'
              }}>
                Already have an account?
              </p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;