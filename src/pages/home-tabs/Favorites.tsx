import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <img
            alt="Music image"
            src="https://i.ytimg.com/vi/INTe8o6EErU/maxresdefault.jpg"
          />
          <IonCardHeader>
            <IonCardTitle>Music</IonCardTitle>
            <IonCardSubtitle>I LOVE LISTENING TO MUSIC</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I love music because it makes me feel happy and relaxed. When I’m sad, music helps me feel better. It’s always there when I need it. That’s why I love music.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img
            alt="Wattpad image"
            src="https://tse4.mm.bing.net/th?id=OIP.utmDwQM05qDGPcqMZj5svAHaDn&pid=Api&P=0&h=180"
          />
          <IonCardHeader>
            <IonCardTitle>Wattpad</IonCardTitle>
            <IonCardSubtitle>I LOVE READING WATTPAD STORIES</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I love reading Wattpad because it has many fun and exciting stories. I can read anytime and enjoy stories made by different people.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img
            alt="TJ Monterde"
            src="https://i.ytimg.com/vi/AVCOx889qf4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGwgbChsMA8=&amp;rs=AOn4CLDWeadccroVT8X8Fm-ddKqB90CPXw"
          />
          <IonCardHeader>
            <IonCardTitle>TJ Monterde</IonCardTitle>
            <IonCardSubtitle>OPM ARTIST I LOVE</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I enjoy TJ Monterde's songs because of his heartfelt lyrics and calming voice. His music tells stories I can relate to, and it brings peace to my day.
          </IonCardContent>
        </IonCard>

        
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
