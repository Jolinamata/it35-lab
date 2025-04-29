import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonModal,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAlert,
  IonAvatar,
  IonTitle,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClients';
import bcrypt from 'bcryptjs';

// Reusable AlertBox component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenVerificationModal = () => {
    if (!email.endsWith('@nbsc.edu.ph')) {
      setAlertMessage('Only @nbsc.edu.ph emails are allowed to register.');
      setShowAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
      return;
    }

    setShowVerificationModal(true);
  };

  const doRegister = async () => {
    setShowVerificationModal(false);
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) throw new Error('Account creation failed: ' + error.message);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const { error: insertError } = await supabase.from('users').insert([
        {
          username,
          user_email: email,
          user_firstname: firstName,
          user_lastname: lastName,
          user_password: hashedPassword,
        },
      ]);

      if (insertError) throw new Error('Failed to save user data: ' + insertError.message);

      setShowSuccessModal(true);
    } catch (err) {
      if (err instanceof Error) setAlertMessage(err.message);
      else setAlertMessage('An unknown error occurred.');
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <div style={{ 
          
          display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IonAvatar style={{ width: '100px', height: '100px' }}>
            <img
              src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG"
              alt="Avatar"
              
            />
          </IonAvatar>
        </div>

        <IonCard style={{ 
         
          backgroundImage: 'url(https://i.pinimg.com/originals/6a/32/7c/6a327caa4b5c102de396a1c3aaa20e98.gif)',
        
          maxWidth: '500px', margin: '20px auto' }}>
          <IonCardContent>
            <div style={{
              background: 'white',
              textAlign: 'center', marginBottom: '15px' }}>
              <IonText style={{ fontSize: '2rem', fontWeight: 'bold' }}>USER REGISTRATION</IonText>
            </div>
            <IonItem
  style={{
    
    '--background': '#f0f8ff',
    '--border-color': '#6200ea',
    '--highlight-color-focused': '#6200ea',
    '--color': '#000',
    borderRadius: '10px',
    marginTop: '15px',
    padding: '10px',
    
  }}
>
  <IonLabel
    position="stacked"
    style={{
      width: '100px',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#333',
    }}
  >
    Username
  </IonLabel>
  <IonInput
    type="text"
    placeholder="Enter a unique username"
    value={username}
    onIonChange={e => setUsername(e.detail.value!)}
  />
</IonItem>

<IonItem
  style={{
    '--background': '#f0f8ff',
    '--border-color': '#6200ea',
    '--highlight-color-focused': '#6200ea',
    '--color': '#000',
    borderRadius: '10px',
    marginTop: '15px',
    padding: '10px',
  }}
>
  <IonLabel
    position="stacked"
    style={{
      width: '100px',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#333',
    }}
  >
    First Name
  </IonLabel>
  <IonInput
    type="text"
    placeholder="Enter your first name"
    value={firstName}
    onIonChange={e => setFirstName(e.detail.value!)}
  />
</IonItem>

<IonItem
  style={{
    '--background': '#f0f8ff',
    '--border-color': '#6200ea',
    '--highlight-color-focused': '#6200ea',
    '--color': '#000',
    borderRadius: '10px',
    marginTop: '15px',
    padding: '10px',
  }}
>
  <IonLabel
    position="stacked"
    style={{
      width: '100px',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#333',
    }}
  >
    Last Name
  </IonLabel>
  <IonInput
    type="text"
    placeholder="Enter your last name"
    value={lastName}
    onIonChange={e => setLastName(e.detail.value!)}
  />
</IonItem>

<IonItem
  style={{
    '--background': '#f0f8ff',
    '--border-color': '#6200ea',
    '--highlight-color-focused': '#6200ea',
    '--color': '#000',
    borderRadius: '10px',
    marginTop: '15px',
    padding: '10px',
  }}
>
  <IonLabel
    position="stacked"
    style={{
      width: '100px',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#333',
    }}
  >
    Email
  </IonLabel>
  <IonInput
    type="email"
    placeholder="youremail@nbsc.edu.ph"
    value={email}
    onIonChange={e => setEmail(e.detail.value!)}
  />
</IonItem>

<IonItem
  style={{
    '--background': '#f0f8ff',
    '--border-color': '#6200ea',
    '--highlight-color-focused': '#6200ea',
    '--color': '#000',
    borderRadius: '10px',
    marginTop: '15px',
    padding: '10px',
  }}
>
  <IonLabel
    position="stacked"
    style={{
      width: '100px',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#333',
    }}
  >
    Password
  </IonLabel>
  <IonInput
    type="password"
    placeholder="Enter password"
    value={password}
    onIonChange={e => setPassword(e.detail.value!)}
  >
    <IonInputPasswordToggle slot="end" />
  </IonInput>
</IonItem>

<IonItem
  style={{
    '--background': '#f0f8ff',
    '--border-color': '#6200ea',
    '--highlight-color-focused': '#6200ea',
    '--color': '#000',
    borderRadius: '10px',
    marginTop: '15px',
    padding: '10px',
  }}
>
  <IonLabel
    position="stacked"
    style={{
      width: '100px',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#333',
    }}
  >
    Confirm Password
  </IonLabel>
  <IonInput
    type="password"
    placeholder="Confirm password"
    value={confirmPassword}
    onIonChange={e => setConfirmPassword(e.detail.value!)}
  >
    <IonInputPasswordToggle slot="end" />
  </IonInput>
</IonItem>



            <div style={{ marginTop: '20px' }}>
              <IonButton expand="block" onClick={handleOpenVerificationModal}>Register</IonButton>
              <IonButton expand="block" fill="outline" routerLink="/it35-lab">Already have an account? Sign In</IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Verification Modal */}
        <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
          <IonContent className="ion-padding">
            <IonCard className="ion-padding" style={{ marginTop: '25%' }}>
              <IonCardHeader>
                <IonCardTitle>User Registration Details</IonCardTitle>
                <hr />
                <IonCardSubtitle>Username</IonCardSubtitle>
                <IonCardTitle>{username}</IonCardTitle>

                <IonCardSubtitle>Email</IonCardSubtitle>
                <IonCardTitle>{email}</IonCardTitle>

                <IonCardSubtitle>Name</IonCardSubtitle>
                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5px' }}>
                <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                <IonButton color="primary" onClick={doRegister}>Confirm</IonButton>
              </div>
            </IonCard>
          </IonContent>
        </IonModal>

        {/* Success Modal */}
        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
          <IonContent className="ion-padding" style={{ textAlign: 'center', marginTop: '35%' }}>
            <IonTitle>Registration Successful 🎉</IonTitle>
            <IonText>
              <p>Your account has been created successfully.</p>
              <p>Please check your email address.</p>
            </IonText>
            <IonButton routerLink="/it35-lab" color="primary">Go to Login</IonButton>
          </IonContent>
        </IonModal>

        {/* Alert */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Register;