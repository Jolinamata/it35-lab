import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
  IonAlert,
  IonLoading,
  IonText,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonTitle,
  IonInputPasswordToggle,
  useIonRouter
} from '@ionic/react';

const Register: React.FC = () => {
  const navigation = useIonRouter();

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const DoRegister = () => {
    setIsLoading(true);
    if (!firstName || !lastName || !email || !password || !confirmPassword || !username) {
      setAlertMessage("Please fill in all fields.");
      setTimeout(() => {
        setShowAlert(true);
        setIsLoading(false);
      }, 1000);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match.");
      setTimeout(() => {
        setShowAlert(true);
        setIsLoading(false);
      }, 1000);
      return;
    }

    setAlertMessage("Registration successful! Redirecting to login.");
    setTimeout(() => {
      setShowAlert(true);
      setIsLoading(false);
    }, 1000);
    setTimeout(() => {
      navigation.push('/it35-lab', 'forward', 'replace');
    }, 3000);
  };

  const DoLogin = () => {
    navigation.push('/it35-lab', 'forward', 'replace');
  };

  return (
    <IonPage>
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
              <IonText style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>USER REGISTRATION</IonText>
            </div>

            <IonInput
              label="Username"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter a unique username"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              label="First Name"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter your first name"
              value={firstName}
              onIonChange={(e) => setFirstName(e.detail.value!)}
              style={{ marginTop: '15px' }}
            />
            <IonInput
              label="Last Name"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter your last name"
              value={lastName}
              onIonChange={(e) => setLastName(e.detail.value!)}
              style={{ marginTop: '15px' }}
            />
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              style={{ marginTop: '15px' }}
            />
            <IonInput
              label="Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Enter password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              style={{ marginTop: '15px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
            <IonInput
              label="Confirm Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              style={{ marginTop: '15px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <div style={{ marginTop: '20px' }}>
              <IonButton expand="block" onClick={DoRegister}>Register</IonButton>
              <IonButton expand="block" fill="outline" onClick={DoLogin}>Already have an account? Sign In</IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <IonLoading
          isOpen={isLoading}
          message="Please wait..."
          duration={0}
          spinner="circles"
        />

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={alertMessage.includes("successful") ? "Success" : "Error"}
          message={alertMessage}
          buttons={[{ text: 'OK', handler: () => setShowAlert(false) }]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Register;
