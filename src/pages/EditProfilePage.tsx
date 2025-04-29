import React, { useState, useRef, useEffect } from 'react';
import {
  IonContent, IonPage, IonInput, IonButton, IonAlert, IonHeader,
  IonBackButton, IonButtons, IonItem, IonText, IonCol, IonGrid,
  IonRow, IonInputPasswordToggle, IonImg, IonAvatar,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClients';
import { useHistory } from 'react-router-dom';

const EditAccount: React.FC = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchSessionAndData = async () => {
      const { data: session, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !session || !session.session) {
        setAlertMessage('You must be logged in to access this page.');
        setShowAlert(true);
        history.push('/it35-lab/login');
        return;
      }

      const { data: user, error: userError } = await supabase
        .from('users')
        .select('user_firstname, user_lastname, user_avatar_url, user_email, username')
        .eq('user_email', session.session.user.email)
        .single();

      if (userError || !user) {
        setAlertMessage('User data not found.');
        setShowAlert(true);
        return;
      }

      setFirstName(user.user_firstname || '');
      setLastName(user.user_lastname || '');
      setAvatarPreview(user.user_avatar_url);
      setEmail(user.user_email);
      setUsername(user.username || '');
    };

    fetchSessionAndData();
  }, [history]);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    if (password !== confirmPassword) {
      setAlertMessage("Passwords don't match.");
      setShowAlert(true);
      return;
    }

    const { data: session, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session || !session.session) {
      setAlertMessage('Error fetching session or no session available.');
      setShowAlert(true);
      return;
    }

    const user = session.session.user;

    if (!user.email) {
      setAlertMessage('Error: User email is missing.');
      setShowAlert(true);
      return;
    }

    const { error: passwordError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });

    if (passwordError) {
      setAlertMessage('Incorrect current password.');
      setShowAlert(true);
      return;
    }

    let avatarUrl = avatarPreview;

    if (avatarFile) {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('user-avatars')
        .upload(filePath, avatarFile, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) {
        setAlertMessage(`Avatar upload failed: ${uploadError.message}`);
        setShowAlert(true);
        return;
      }

      const { data } = supabase.storage.from('user-avatars').getPublicUrl(filePath);
      avatarUrl = data.publicUrl;
    }

    const { error: updateError } = await supabase
      .from('users')
      .update({
        user_firstname: firstName,
        user_lastname: lastName,
        user_avatar_url: avatarUrl,
        username: username,
      })
      .eq('user_email', user.email);

    if (updateError) {
      setAlertMessage(updateError.message);
      setShowAlert(true);
      return;
    }

    if (password) {
      const { error: passwordUpdateError } = await supabase.auth.updateUser({
        password: password,
      });

      if (passwordUpdateError) {
        setAlertMessage(passwordUpdateError.message);
        setShowAlert(true);
        return;
      }
    }

    setAlertMessage('Account updated successfully!');
    setShowAlert(true);
    history.push('/it35-lab/app');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/it35-lab/app" />
        </IonButtons>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonText className="ion-text-center" color="primary">
          <h2>Edit Account</h2>
        </IonText>

        <div style={{ background: '#f3e5f5', padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
          <IonGrid className="ion-padding-top">
            <IonRow className="ion-justify-content-center ion-align-items-center">
              <IonCol size="12" className="ion-text-center">
                {avatarPreview && (
                  <IonAvatar style={{ width: '120px', height: '120px', margin: '10px auto' }}>
                    <IonImg src={avatarPreview} style={{ objectFit: 'cover' }} />
                  </IonAvatar>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
                <IonButton expand="block" color="medium" onClick={() => fileInputRef.current?.click()}>
                  Upload Avatar
                </IonButton>
              </IonCol>
            </IonRow>

            {/* Username */}
            <IonRow>
              <IonCol size="12">
                <IonItem lines="inset" style={{  borderRadius: '8px' }}>
                  <IonInput
                    label="Username"
                    fill="outline"
                    placeholder="Enter username"
                    value={username}
                    onIonChange={(e) => setUsername(e.detail.value!)}
                    color="primary"
                    style={{ backgroundColor: '#e0f7fa', borderColor: '#00bcd4' }}
                  />
                </IonItem>
              </IonCol>
            </IonRow>

            {/* First and Last Name */}
            <IonRow>
              <IonCol size="6">
                <IonItem lines="inset" style={{ background: '#f0f8ff', borderRadius: '8px' }}>
                  <IonInput
                    label="First Name"
                    fill="outline"
                    placeholder="Enter First Name"
                    value={firstName}
                    onIonChange={(e) => setFirstName(e.detail.value!)}
                    color="primary"
                    style={{ backgroundColor: '#e0f7fa', borderColor: '#00bcd4' }}
                  />
                </IonItem>
              </IonCol>
              <IonCol size="6">
                <IonItem lines="inset" style={{ background: '#f0f8ff', borderRadius: '8px' }}>
                  <IonInput
                    label="Last Name"
                    fill="outline"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onIonChange={(e) => setLastName(e.detail.value!)}
                    color="primary"
                    style={{ backgroundColor: '#e0f7fa', borderColor: '#00bcd4' }}
                  />
                </IonItem>
              </IonCol>
            </IonRow>

            {/* Change Password */}
            <IonRow>
              <IonCol size="12">
                <IonText color="medium"><h4>Change Password</h4></IonText>
                <IonItem lines="inset" style={{ background: '#f0f8ff', borderRadius: '8px' }}>
                  <IonInput
                    label="New Password"
                    type="password"
                    fill="outline"
                    placeholder="Enter new password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    color="primary"
                    style={{ backgroundColor: '#e0f7fa', borderColor: '#00bcd4' }}
                  >
                    <IonInputPasswordToggle slot="end" />
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            {/* Confirm Password */}
            <IonRow>
              <IonCol size="12">
                <IonItem lines="inset" style={{ background: '#f0f8ff', borderRadius: '8px' }}>
                  <IonInput
                    label="Confirm Password"
                    type="password"
                    fill="outline"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                    color="primary"
                    style={{ backgroundColor: '#e0f7fa', borderColor: '#00bcd4' }}
                  >
                    <IonInputPasswordToggle slot="end" />
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            {/* Confirm Changes with Current Password */}
            <IonRow>
              <IonCol size="12">
                <IonText color="medium"><h4>Confirm Changes</h4></IonText>
                <IonItem lines="inset" style={{ background: '#f0f8ff', borderRadius: '8px' }}>
                  <IonInput
                    label="Current Password"
                    type="password"
                    fill="outline"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onIonChange={(e) => setCurrentPassword(e.detail.value!)}
                    color="primary"
                    style={{ backgroundColor: '#e0f7fa', borderColor: '#00bcd4' }}
                  >
                    <IonInputPasswordToggle slot="end" />
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            {/* Update Button */}
            <IonRow>
              <IonCol size="12" className="ion-margin-top">
                <IonButton expand="block" shape="round" color="primary" onClick={handleUpdate}>
                  Update Account
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
       

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default EditAccount;